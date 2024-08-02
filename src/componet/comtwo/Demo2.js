import React, { useContext } from 'react'
import Usercontext from '../../Context/Usercontex'

function Demo2() {
    const data = useContext(Usercontext)
    console.log(data);
  return (
    <>
      
    </>
  )
}

export default Demo2
