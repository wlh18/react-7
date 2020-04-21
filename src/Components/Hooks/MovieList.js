import React, { useState } from 'react'

const MovieList = (props) => {
  const [movies, setMovies] = useState([
    'Alien',
    'The Incredibles',
    'Prometheus',
  ])
  const [userInput, setUserInput] = useState('')

  return (
    <div>
      {movies.map((movie, index) => (
        <h2 key={index}>{movie}</h2>
      ))}
      <input onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={() => setMovies([...movies, userInput])}>
        Add Movie
      </button>
    </div>
  )
}

export default MovieList
