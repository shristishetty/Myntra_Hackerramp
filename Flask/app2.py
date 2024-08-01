folder_path = 'downloaded_images'
files = os.listdir(folder_path)
image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.bmp'}
ethnic = [f for f in files if os.path.splitext(f)[1].lower() in image_extensions]

# Print the list of images
print(ethnic)
myn=myntra_image_urls[:1000]
vgg_model = VGG16(weights='imagenet')
feat_extractor = Model(inputs=vgg_model.input, outputs=vgg_model.get_layer("fc2").output)

def extract_features(image_urls):
    features = []
    for url in image_urls:
        response = requests.get(url)
        if response.status_code == 200:
            image_data = BytesIO(response.content)
            img = Image.open(image_data).convert('RGB').resize((224, 224))
            numpy_image = img_to_array(img)
            image_batch = np.expand_dims(numpy_image, axis=0)
            processed_image = preprocess_input(image_batch)
            feature = feat_extractor.predict(processed_image)
            features.append(feature.flatten())
        else:
            print(f"Failed to retrieve image from URL: {url}. Status code: {response.status_code}")
    return np.array(features)

# Extract features from Myntra images
myntra_features = extract_features(myn)
from sklearn.metrics.pairwise import cosine_similarity

def find_similar_products(ethnic_features, myntra_features):
    # Compute similarities
    similarities = cosine_similarity(ethnic_features, myntra_features)
    return similarities

# Assuming you have already loaded ethnic image file paths
ethnic_image_files = ['downloaded_images/' + filename for filename in 
                      ['ethnic_image_0.jpg', 'ethnic_image_1.jpg', 'ethnic_image_2.jpg', 'ethnic_image_3.jpg', 
                       'ethnic_image_4.jpg', 'ethnic_image_5.jpg', 'ethnic_image_6.jpg', 'ethnic_image_7.jpg', 
                       'ethnic_image_8.jpg', 'ethnic_image_9.jpg', 'ethnic_image_10.jpg', 'ethnic_image_11.jpg', 
                       'ethnic_image_12.jpg', 'ethnic_image_13.jpg', 'ethnic_image_14.jpg', 'ethnic_image_15.jpg', 
                       'ethnic_image_16.jpg', 'ethnic_image_17.jpg', 'ethnic_image_18.jpg', 'ethnic_image_19.jpg', 
                       'ethnic_image_20.jpg', 'ethnic_image_21.jpg', 'ethnic_image_22.jpg', 'ethnic_image_23.jpg', 
                       'ethnic_image_24.jpg', 'ethnic_image_25.jpg', 'ethnic_image_26.jpg', 'ethnic_image_27.jpg', 
                       'ethnic_image_28.jpg', 'ethnic_image_29.jpg', 'ethnic_image_30.jpg']]

# Extract features from ethnic images
ethnic_features = extract_features_from_files(ethnic_image_files, feat_extractor)

# Find similarities
similarities = find_similar_products(ethnic_features, myntra_features)

def extract_features_from_files(file_paths, feat_extractor):
    features = []
    for file_path in file_paths:
        img = Image.open(file_path).convert('RGB').resize((224, 224))
        numpy_image = img_to_array(img)
        image_batch = np.expand_dims(numpy_image, axis=0)
        processed_image = preprocess_input(image_batch)
        feature = feat_extractor.predict(processed_image)
        features.append(feature.flatten())
    return np.array(features)