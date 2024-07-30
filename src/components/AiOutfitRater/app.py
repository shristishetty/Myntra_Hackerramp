from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
from transformers import CLIPProcessor, CLIPModel
import torch
from PIL import Image
import os
import requests

# Increase timeout for requests globally
requests.adapters.DEFAULT_RETRIES = 5
requests.adapters.DEFAULT_TIMEOUT = 120

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

# Load the CLIP model and processor
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32", token=None)
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32", token=None)

# Define rating descriptions
rating_texts = [f"This outfit is rated {i} out of 10." for i in range(1, 11)]


def rate_outfit(image_path):
    image = Image.open(image_path)

    # Preprocess image and text inputs
    inputs = processor(
        text=rating_texts, images=image, return_tensors="pt", padding=True
    )
    outputs = model(**inputs)

    # Calculate similarity between image and text embeddings
    logits_per_image = outputs.logits_per_image  # This gives a tensor of shape [1, 10]
    probs = logits_per_image.softmax(dim=1)  # Convert logits to probabilities

    # Get the rating with the highest probability
    rating = torch.argmax(probs, dim=1).item() + 1
    return rating


@app.route("/rate", methods=["POST"])
def rate_outfit_endpoint():
    if "image" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["image"]

    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    file_path = os.path.join("uploads", file.filename)

    try:
        print(f"Saving file to: {file_path}")  # Debugging line
        file.save(file_path)
    except Exception as e:
        print(f"Error saving file: {e}")
        return jsonify({"error": "File save failed"}), 500

    # Verify the file is saved correctly
    if not os.path.exists(file_path):
        return jsonify({"error": "File not saved"}), 500

    # Generate a rating
    rating = rate_outfit(file_path)
    print(rating)

    # Delete the saved file
    os.remove(file_path)

    if rating:
        return jsonify({"rating": rating})
    else:
        return jsonify({"error": "Failed to generate rating"})


@app.route("/")
@cross_origin()
def index():
    return send_from_directory("", "index.html")


if __name__ == "__main__":
    if not os.path.exists("uploads"):
        os.makedirs("uploads")
    app.run(debug=True)
