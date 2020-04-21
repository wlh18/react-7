import React, { useState } from 'react'
import BadButton from './BadButton'
import Square from './Square'
import GoodButton from './GoodButton'
import '../style.css'

const Hocs = (props) => {
  const [admin, setAdmin] = useState(false)
  return (
    <section className="advanced-react-section">
      <h1>
        HOCS
        <a
          href="https://reactjs.org/docs/higher-order-components.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <BadButton />
      <BadButton darkMode />
      <Square />
      <Square admin={admin} darkMode />
      <GoodButton />
      <GoodButton text="Log In/Out" onClick={() => setAdmin(!admin)} darkMode />
    </section>
  )
}
export default Hocs
