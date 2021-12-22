# movie-search-app

This repo contains the simple application to fetch the list of movies from the [moviedb.org API](https://www.themoviedb.org/settings/api). It also uses the [react-router](https://reacttraining.com/react-router/web/guides/quick-start) to handle the routing.

You have to create an API key for the [moviedb.org](https://www.themoviedb.org/settings/api) API.

1. Go to [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
2. Create an account.
3. Go to settings and create an API key.
4. Create an .env file and add the following lines:

```
   REACT_APP_API_KEY = "your_api_key"
```

# API's used

To read popular movies

```
http://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}
```

To search the movies

```
https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false
```

# How to run the application

Clone the repo to your local machine. Then go to the root of the repo and run the following command:

```
npm install
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
