import React, { useContext } from 'react'

import Usercontext from '../Context/Usercontex';
import Demo2 from './comtwo/Demo2';

function Demo() {
const data= useContext(Usercontext);
   // console.log(data);
  return (
    <>
      <Demo2/>
    </>
  )
}

export default Demo
