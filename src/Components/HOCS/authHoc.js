import React, { useState, useEffect } from 'react'

const authHoc = (WrappedComponent) => {
  return (props) => {
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
      if (props.admin) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }, [props.admin])

    return isAdmin ? <WrappedComponent {...props} /> : <div>Log in please</div>
  }
}

export default authHoc
