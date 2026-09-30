import json

f = open('curriculum-data.js', encoding='utf-8').read()
raw = f[f.find('{'):f.rfind('}')+1]
data = json.loads(raw)

# Keys to keep per chapter (basic metadata only — no content)
KEEP_KEYS = ['id', 'num', 'title', 'unitId', 'startPage', 'endPage',
             'pathCategory', 'badge', 'duration', 'simulationType', 'subject']

for ch in data['chapters']:
    for key in list(ch.keys()):
        if key not in KEEP_KEYS:
            del ch[key]

new_json = json.dumps(data, indent=2, ensure_ascii=False)
new_content = 'const curriculum = ' + new_json + ';\n'
open('curriculum-data.js', 'w', encoding='utf-8').write(new_content)

print(f"Done. {len(data['chapters'])} chapters stripped.")
print("Keys remaining:", list(data['chapters'][0].keys()))
