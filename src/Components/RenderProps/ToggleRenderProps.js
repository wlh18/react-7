import React, { useState } from 'react'
import styleHoc from '../HOCS/styleHoc'

const ToggleRenderProps = (props) => {
  const [show, setShow] = useState(false)
  return <div>{props.render(show, setShow, props.style)}</div>
}

export default styleHoc(ToggleRenderProps)
