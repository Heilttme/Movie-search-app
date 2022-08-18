import React, {useEffect, useState} from "react";
import MovieCard from "./components/MovieCard"
import "./App.css"

function App() {
  const [userQuerry, changeUserQuerry] = useState('')
  const [apiQuerry, changeApiQuerry] = useState([])

  const setQuerry = (value) => {
    changeUserQuerry(value)
  }

  const search = () => {
    userQuerry && fetch(`https://api.themoviedb.org/3/search/movie?api_key=49f45cb6a78dab2b06fbf9536bcd90cb&query=${userQuerry}`)
    .then(data => data.json())
    .then(data => changeApiQuerry(data.results))
  }


  let mappedResults = apiQuerry.map(el => {
    return <MovieCard key={el.id} movie={el} />
  })

  useEffect(() => {
   mappedResults = apiQuerry.map(el => {
      return <MovieCard key={el.id} movie={el} />
  })
  }, [apiQuerry])

;  return (
    <div className="container">
      <h1>Movie search app</h1>
      <p>Search for popular movies.</p>
      <div className="form">
        <input 
          onChange={e => setQuerry(e.target.value)} 
          type="text"
          value={userQuerry}
          placeholder="Type movies name"
        />
        <button onClick={search}>Search</button>
      </div>
        <div className="cards">
            {mappedResults.length ? mappedResults : <h2 className="error">Whoops... it looks like there is no movies according to your request :(</h2>}
        </div>
    </div>
  );
}

export default App;
