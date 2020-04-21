import React, { useState } from 'react'

const Counter = (props) => {
  /*
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }
  */
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click Me Baby One More Time!
      </button>
    </div>
  )
}

export default Counter
