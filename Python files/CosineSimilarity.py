import numpy as np
import pandas as pd
import difflib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity



movies_data = pd.read_csv('2000 to 2022 with hindi movies.csv')


selected_features = ['title','genres','imDbRating','imDbRatingVotes','plot','stars']
print(selected_features)

for feature in selected_features:
    movies_data[feature] = movies_data[feature].fillna('')


combined_features = movies_data['title']+''+ movies_data['genres']+' '+str(movies_data['imDbRating'])+' '+str(movies_data['imDbRatingVotes'])+' '+movies_data['plot']+' '+movies_data['stars']


vectorizer = TfidfVectorizer()

feature_vectors = vectorizer.fit_transform(combined_features)


similarity = cosine_similarity(feature_vectors)

np.save('CosSimilarityData.npy',similarity)

print(similarity)