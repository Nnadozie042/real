import React from 'react';
import lad from './lad.png';
import {FaArrowRight, FaPlayCircle}from'react-icons/fa'
const Home=()=>{
  return(
    <div className="cover">
       <div className="home-background"><img src={lad}alt=""/></div>
     <div className="home-cover">

    <div className="home-text">
        <p className="shape">Subscribe to FGN</p>
        <p className="lag">Saving Bond</p>
        <p className="loan">Loan and get paid with interest</p>
        <div className="book">
          <div className="pen">
            <span className="head"><button>Get started<span><FaArrowRight style={{color:'white',marginTop:6,paddingLeft:13}}/></span></button></span>
          </div>
          <div className="play">
            <span className="see"><FaPlayCircle style={{fontSize:18,color:'gray'}}/></span>
            <span className="greek">see video</span>

          </div>
        </div>
      </div>
     </div>

      </div>
  )

}
export default Home;