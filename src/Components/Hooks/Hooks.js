import React from 'react'
import Counter from './Counter'
import MovieList from './MovieList'
import Poke from './Poke'
import '../style.css'

const Hooks = props => {
  return (
    <section className="advanced-react-section">
      <h1>Hooks</h1>
      <Counter />
      <MovieList />
      <Poke />
    </section>
  )
}
export default Hooks
