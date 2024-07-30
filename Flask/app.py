from flask import Flask, request, jsonify
from flask import request
from flask_cors import CORS
import pandas as pd
import json

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

# Load the Excel file into a DataFrame
df = pd.read_excel('myndata.xlsx')
# print(df.head())

def get_images_by_keywords(df, input_keywords):
    # Define the keyword mappings
    keyword_mappings = {
        ('business',): 'formal',
        ('wedding',): 'saree',
        # ('sport', 'gym', 'marathon'): 'gym',
        ('birthday',): 'party'  # Corrected to a tuple
    }

    # Normalize input keywords
    input_keywords = set(keyword.lower() for keyword in input_keywords)
    print(input_keywords)
    # Initialize a variable to store the matched category
    matched_category = None

    # Check the input keywords against each set of keywords in the mappings
    for keyword_set, target_name in keyword_mappings.items():
        if any(keyword in input_keywords for keyword in keyword_set):
            matched_category = target_name
            break

    if matched_category:
        # test_pattern='wedding'
        target_pattern = matched_category
        # target_pattern = test_pattern
        filtered_df = df[df['name'].str.contains(target_pattern, case=False, na=False)]
        print(filtered_df)
        image_urls = filtered_df['img'].tolist()

    else:
        image_urls = []

    return image_urls

# @app.route('/get-images', methods=['POST'])
# def get_images():
#     data = request.json
#     occasion = data.get('occasion', [])
#     if isinstance(occasion, str):
#         occasion = [keyword.strip().lower() for keyword in occasion.split(',')]
#     image_urls = get_images_by_keywords(df, occasion)
#     return jsonify(image_urls)

@app.route('/get-images', methods=['POST'])
def get_images():
    data = request.json
    occasion = data.get('occasion')

    # If 'occasion' is supposed to be a list, ensure it's treated as such
    if isinstance(occasion, str):
        try:
            # Attempt to load a JSON string
            occasion = json.loads(occasion)
        except json.JSONDecodeError:
            # If the string is not a JSON string, treat it as a comma-separated list
            occasion = occasion.split(',')
    elif not isinstance(occasion, list):
        # If it's neither a string nor a list, raise an error or handle accordingly
        return jsonify({"error": "Invalid input format"}), 400

    # Proceed with processing the 'occasion' as a list of keywords
    image_urls = get_images_by_keywords(df, occasion)
    return jsonify(image_urls)

if __name__ == '__main__':
    app.run(debug=True)

