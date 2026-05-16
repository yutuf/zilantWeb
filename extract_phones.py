import csv
import re
import json

CSV_FILE = "firmalar.csv"
TXT_FILE = "directory_extracted.txt"
OUT_FILE = "companies_with_phones.json"

def clean_text(text):
    return text.replace('', '').replace('?', '').strip().upper()

def extract_phones():
    # Read text
    with open(TXT_FILE, 'r', encoding='utf-8', errors='replace') as f:
        lines = [line.strip() for line in f.readlines()]
    
    # Extract all phones from text into a list of (company_name_guess, phone)
    phones_in_text = []
    for i in range(len(lines)):
        if lines[i] == "PHONE" and i + 1 < len(lines):
            phone = lines[i+1]
            if "+90" in phone or "(312)" in phone:
                # The company name is usually a few lines above. Let's get the previous 5 lines and guess.
                # In PDF extraction, it might be right above or separated by empty lines.
                company_lines = []
                for j in range(1, 6):
                    if i-j >= 0 and len(lines[i-j]) > 3 and "WEB" not in lines[i-j] and "FAX" not in lines[i-j]:
                        company_lines.append(lines[i-j])
                
                name_guess = " ".join(reversed(company_lines))
                phones_in_text.append((name_guess.upper(), phone.strip()))

    # Read CSV
    firmalar = []
    with open(CSV_FILE, 'r', encoding='utf-8', errors='replace') as f:
        reader = csv.DictReader(f)
        for row in reader:
            firmalar.append(row)

    results = []
    found_count = 0

    for i, firma in enumerate(firmalar):
        firma_adi = clean_text(firma['Firma Adi'])
        eposta = firma['E-Posta']
        sektor = firma['Sektor']
        
        # Simple matching: split firma_adi into words and find the best match in phones_in_text
        words = [w for w in firma_adi.split() if len(w) > 3 and w not in ["SAN.", "TİC.", "LTD.", "ŞTİ.", "A.Ş.", "SANAYİ", "TİCARET"]]
        
        best_phone = "Bulunamadı"
        best_score = 0
        
        for text_name, phone in phones_in_text:
            score = 0
            for w in words:
                if w in text_name:
                    score += 1
            
            if score > best_score and score >= max(1, len(words) // 2):
                best_score = score
                best_phone = phone
        
        if best_phone != "Bulunamadı":
            found_count += 1
            
        results.append({
            "id": i + 1,
            "name": firma['Firma Adi'].strip(),
            "email": eposta.strip(),
            "sector": sektor.strip(),
            "phone": best_phone,
            "status": "Aranmadı",
            "notes": ""
        })

    print(f"Toplam {len(firmalar)} firmadan {found_count} tanesinin telefonu bulundu.")
    
    with open(OUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print(f"Veriler {OUT_FILE} dosyasına kaydedildi.")

if __name__ == "__main__":
    extract_phones()
