import React from 'react'
import Usercontext from './Usercontex'

function Usercontextprovider({children}) {

const data = "naitik kherala";

  return (
    <>
      <Usercontext.Provider value={data}>
{children}
      </Usercontext.Provider>
    </>
  )
}

export default Usercontextprovider

