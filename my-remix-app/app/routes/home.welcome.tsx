import React from 'react'
import hive from "../images/WelcomeToTheHive.png"
function welcome() {
  return (
   <div className='grid grid-row justify-center items-center  min-h-screen'>
       <img src={hive} alt="hive" />
     </div>
  )
}

export default welcome