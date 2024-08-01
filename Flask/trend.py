import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

def train_and_predict():
    df = pd.read_csv('datasets/myntra.csv')

    def is_trendy(row):
        if (row['rating'] > 4.0 and 
            row['sales_count'] > 243 and 
            row['wishlist_count'] > 176 and 
            row['ratingTotal'] > 40):
            return 1  
        else:
            return 0  

    df['trendy'] = df.apply(is_trendy, axis=1)
    X = df[['rating', 'sales_count', 'wishlist_count', 'ratingTotal']]
    y = df['trendy']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    model = Sequential([
        Dense(64, activation='relu', input_shape=(X_train_scaled.shape[1],)),
        Dense(32, activation='relu'),
        Dense(1, activation='sigmoid')
    ])

    model.compile(optimizer='adam',
                  loss='binary_crossentropy',
                  metrics=['accuracy'])

    model.fit(X_train_scaled, y_train, epochs=20, batch_size=32, verbose=1)

    print("\nEvaluating the model on the test set:")
    _, accuracy = model.evaluate(X_test_scaled, y_test)
    print(f'Test Accuracy: {accuracy:.2f}')

if __name__ == "__main__":
    train_and_predict()
