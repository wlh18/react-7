import React, { useState } from 'react'
import ComplexButton from './ComplexButton'
import SimpleButton from './SimpleButton'
import Square from './Square'
import '../style.css'

const Hocs = props => {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <section className="advanced-react-section">
      <h1>HOCS</h1>
      <ComplexButton />
      <ComplexButton
        text="Log in/out"
        onClick={() => setIsAdmin(!isAdmin)}
        darkMode
      />
      <SimpleButton />
      <SimpleButton darkMode />
      <Square darkMode admin={isAdmin} />
      <Square />
    </section>
  )
}
export default Hocs
