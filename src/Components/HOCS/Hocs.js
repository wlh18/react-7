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
      <button onClick={() => setIsAdmin(!isAdmin)}>Log in/out</button>
      <ComplexButton />
      <ComplexButton darkMode />
      <SimpleButton />
      <SimpleButton darkMode />
      <Square darkMode admin={isAdmin} />
      <Square />
    </section>
  )
}
export default Hocs
