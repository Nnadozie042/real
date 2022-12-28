import React from "react";
import Home from './Home.js';
import Sign from './Sign.js';
import Bond from './Bond.js';
import {Routes,Route,Link, BrowserRouter} from 'react-router-dom';
import logo from './logo.png';
import Features from './Features.js';
import Dem from "./Dem";
import Login from './Login';
import Carter from './Carter.js';
import './App.css';
import { FaCartPlus } from "react-icons/fa";



const App=()=>{
  
  return(
   <BrowserRouter>
    <div className="container">
      
         <div className="cold">
        <div className="sand">
          <img src={logo}alt=""/>
        </div>
        <div className="navigation">
           <nav>
            <ul>
              <li>
                <Link style={{display:"none"}}to="/">HOME</Link>
              </li> 
              <li>
                <Link style={{color:"gray"}} to="/Bond">Bond offer</Link>
              </li>
              <li>
                <Link style={{color:"gray"}} to="/Features">Dmo</Link>
              </li>
              <li>
                <Link style={{color:"gray"}}to="/Features">Features</Link>
              </li>  
              
              <li> <Link to="/Home"><button style=
              {{background:"white",color:"blaCK",width:70,height:30,borderStyle:"hidden"}}>login</button></Link></li>
    

              <li>
              <Link to="/Sign"><button style=
              {{background:"black",color:'white',height:30,width:70,borderStyle:"hidden"}}>signUp</button></Link>
              </li> 
              <li>
              <Link to="/Carter"><FaCartPlus style={{color:'gray',fontSize:30,}}/></Link>
              </li>

            </ul>
           </nav>
           </div>
           </div>

      <div className="manager">
      <Routes>
        <Route exact path='/'element={<Home/>}/>
        <Route path='/Bond'element={<Bond/>}/>
        <Route path='/Sign'element={<Sign/>}/> 
        <Route path='/Dem'element={<Dem/>}/>
        <Route path='/Features'element={<Features/>}/> 
        <Route path='/Home'element={<Login/>}/>    
        <Route path='/Carter'element={<Carter/>}/>

      </Routes>
      </div>
      </div>
       </BrowserRouter>
      
  
  )
}
export default App;