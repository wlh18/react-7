import React, { useState } from 'react'
import styleHoc from '../HOCS/styleHoc'

const Toggle = (props) => {
  const [showChildren, setShowChildren] = useState(false)
  return (
    <div style={props.style}>
      {showChildren && props.children}
      <button onClick={() => setShowChildren(!showChildren)}>
        Show/Hide Children
      </button>
    </div>
  )
}

export default styleHoc(Toggle)
