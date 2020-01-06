import React from 'react'
import StyleHOC from './StyleHOC'
import AuthHOC from './AuthHOC'

const Square = props => {
  return (
    <div style={{ ...props.style, width: '100px', height: '100px' }}>
      HELLO I AM A SQUARE
    </div>
  )
}
export default AuthHOC(StyleHOC(Square))
