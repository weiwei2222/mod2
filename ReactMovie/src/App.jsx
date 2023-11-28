import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// IMPORT OUR COMPONENTS
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  const apiKey = "ad26feed";
  const [movie, setMovie] = useState(null);

  // const getMovie = async (searchTerm) => {
  //   const response = await fetch(
  //     `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
  //   );
  //   const data = await response.json();
  //   setMovie(data);
  // };

  const getMovie = async (searchTerm) => {
    const baseUrl = "https://www.omdbapi.com/";
    const url = baseUrl + "?" + "apikey=" + apiKey + "&" + "t=" + searchTerm;
    // make fetch request and store response
    try {
      // fetch with the url, returns the same thing as when i put that url in the address bar
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const movieArray = ["Titanic", "Mulan", "Toy Story", "Clueless"];
    getMovie(movieArray[Math.floor(Math.random() * movieArray.length)]);
  }, []);
  console.log(movie);
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
