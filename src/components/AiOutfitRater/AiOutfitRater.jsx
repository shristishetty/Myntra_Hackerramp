import React, { useState } from 'react';

const AiOutfitRater = () => {
  const [rating, setRating] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('http://localhost:5000/rate', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setRating(result.rating);
      setError(null);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setError('There was an issue processing your request. Please try again.');
    }
  };

  return (
    <div>
      <h1>Upload an image to rate your outfit</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="image" accept="image/*" required />
        <button type="submit">Rate Outfit</button>
      </form>
      {rating && <div id="result"><p>Rating: {rating}/10</p></div>}
      {error && <div id="error"><p>{error}</p></div>}
    </div>
  );
};

export default AiOutfitRater;
