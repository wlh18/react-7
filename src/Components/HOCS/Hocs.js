import React from 'react'
import BadButton from './BadButton'
import Square from './Square'
import '../style.css'

const Hocs = props => {
  return (
    <section className="advanced-react-section">
      <h1>HOCS</h1>
      <BadButton />
      <BadButton darkMode />
      <Square />
    </section>
  )
}
export default Hocs
