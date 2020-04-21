import React from 'react'
import styleHoc from './styleHoc'

const GoodButton = (props) => {
  return (
    <button style={props.style} {...props}>
      {props.text ? props.text : 'Good Little Button'}
    </button>
  )
}

export default styleHoc(GoodButton)
