import React, { useEffect, useState } from 'react'

export default WrappedComponent => {
  return props => {
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
      //CHECK ADMIN HERE
      if (props.admin) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }, [props.admin])

    return isAdmin ? <WrappedComponent {...props} /> : <div>Log in please</div>
  }
}
