import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report
import tensorflow as tf
from tensorflow.keras.models import Sequential, load_model
from tensorflow.keras.layers import Dense

def load_data(file_path):
    df = pd.read_csv(file_path)
    return df

def preprocess_data(df):
    df = df.dropna()
    X = df[['rating', 'sales_count', 'wishlist_count', 'ratingTotal']]
    y = df['trendy']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    return X_train_scaled, X_test_scaled, y_train, y_test

def train_model(X_train, y_train):
    model = Sequential([
        Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
        Dense(32, activation='relu'),
        Dense(1, activation='sigmoid')
    ])

    model.compile(optimizer='adam',
                  loss='binary_crossentropy',
                  metrics=['accuracy'])

    model.fit(X_train, y_train, epochs=20, batch_size=32, verbose=1)

    return model

def evaluate_model(model, X_test, y_test):
    print("\nEvaluating the model on the test set:")
    _, accuracy = model.evaluate(X_test, y_test)
    print(f'Test Accuracy: {accuracy:.2f}')
    y_pred = model.predict_classes(X_test)
    print("\nClassification Report:")
    print(classification_report(y_test, y_pred))

def recommend_trendy_items(df, model):
    X = df[['rating', 'sales_count', 'wishlist_count', 'ratingTotal']]
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    predictions = model.predict(X_scaled)
    threshold = 0.5
    recommended_items = []
    for i in range(len(predictions)):
        if predictions[i] > threshold:
            recommended_items.append({
                'rating': df.iloc[i]['rating'],
                'sales_count': df.iloc[i]['sales_count'],
                'wishlist_count': df.iloc[i]['wishlist_count'],
                'ratingTotal': df.iloc[i]['ratingTotal'],
                'trendy_probability': predictions[i][0]
            })

    return recommended_items

def main():

    file_path = 'datasets/myntra.csv'
    df = load_data(file_path)
    X_train, X_test, y_train, y_test = preprocess_data(df)
    model = train_model(X_train, y_train)
    evaluate_model(model, X_test, y_test)

    recommended_items = recommend_trendy_items(df, model)

    print("\nRecommended Trendy Items:")
    for item in recommended_items:
        print(item)

if __name__ == "__main__":
    main()
