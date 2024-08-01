from flask import Flask, request, jsonify
from flask import request
from flask_cors import CORS
import pandas as pd
import json

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

# Load the Excel file into a DataFrame
df = pd.read_excel('myndata.xlsx')
print(df.head())


import re

def get_images_by_keywords(df, input_keywords, gender):
    keyword_mappings = {
                'women': {
            ('formal',): ['formal'],
            ('wedding',): ['lehenga','saree'],
            ('diwali',): ['ethnic', 'saree','kurti'],
            ('birthday',): ['bodycon dress','mini dress', 'dress'],
            ('beach vacation',): ['beach', 'swim']
        },
        'men': {
            ('business',): ['suit', 'blazer'],
            ('wedding',): ['kurta', 'tuxedo'],
            ('casual',): ['casual'],
            ('birthday',): ['casual', 'jumpsuit']  
        },
        'others': {
            ('business',): ['formal', 'blazer'],
            ('wedding',): ['saree', 'dress', 'suit'],
            ('casual',): ['casual'],
            ('birthday',): ['dress', 'jumpsuit']
        }
    }

    input_keywords = set(keyword.lower() for keyword in input_keywords)

    matched_categories = []

    keyword_patterns = [re.compile(rf'\b{keyword}\b', re.IGNORECASE) for keyword in input_keywords]

    gender_mappings = keyword_mappings.get(gender, keyword_mappings[gender])
    
    if not re.fullmatch(gender, gender):
        return {}

    for keyword_set, categories in gender_mappings.items():
        if any(pattern.search(keyword) for keyword in keyword_set for pattern in keyword_patterns):
            matched_categories.extend(categories)

    matched_categories = list(set(matched_categories))

    images_info = {}

    if matched_categories:
        for category in matched_categories:
            filtered_df = df[df['name'].apply(lambda x: any(re.search(rf'\b{cat}\b', x, re.IGNORECASE) for cat in matched_categories))]
            for _, row in filtered_df.iterrows():
                images_info[row['img']] = row['name']

    return images_info

@app.route('/get-images', methods=['POST'])
def get_images():
    data = request.json
    occasion = data.get('occasion')
    gender = data.get('gender', 'others')  

    if gender not in ['women', 'men', 'others']:
        return jsonify({"error": "Invalid gender value"}), 400

    if isinstance(occasion, str):
        try:
            occasion = json.loads(occasion)
        except json.JSONDecodeError:
            occasion = occasion.split(',')
    elif not isinstance(occasion, list):
        return jsonify({"error": "Invalid input format"}), 400

    images_info = get_images_by_keywords(df, occasion, gender)
    return jsonify(images_info)


if __name__ == '__main__':
    app.run(debug=True)

