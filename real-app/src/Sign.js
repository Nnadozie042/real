import React,{useState} from "react";
import woman from './woman.png';
import man from './man.png'


const Sign=()=>{
  const [value,setValue]=useState({
    firstName:"",

  })
  const HandleSubmit=(event)=>{
    event.preventDefault();
  }
  return(
  <div className='EBERE'>

<div className="images">   
    <div className="second-image"><img src={man}alt=""/></div>

      <div className="first-image"><img src={woman}alt=""/></div>
    </div>
   <div className="size">
   
    <div className="first"><p>SignUp</p></div>
    <div className='third'><p className="chat">Stop spending,start investing</p></div>
      <div className="form">
        <form onSubmit={HandleSubmit}>
          <div className="yes"> 
          <div className="hate"><p>First Name</p></div>
           <input type="text"
            value={value.firstName}
            onChange={(event)=>setValue({...value,firstName:event.target.value})}
            placeholder="Enter your first Name"required/>
          </div>  
            <div className="yes"> 
           <div className="hate"><p>First Name</p></div>
           <input type="text"
            value={value.firstName}
            onChange={(event)=>setValue({...value,firstName:event.target.value})}
            placeholder="Enter your first Name"required/>
          </div>   
          <div className="yes"> 
          <div className="hate"><p>First Name</p></div>
           <input type="text"
            value={value.firstName}
            onChange={(event)=>setValue({...value,firstName:event.target.value})}
            placeholder="Enter your first Name"required/>
          </div>  
           <div className="yes"> 
          <div className="hate"><p>First Name</p></div>
           <input type="text"
            value={value.firstName}
            onChange={(event)=>setValue({...value,firstName:event.target.value})}
            placeholder="Enter Your first Name"required/>
          </div>  
           <div className="yes"> 
          <div className="hate"><p>First Name</p></div>
           <input type="text"
            value={value.firstName}
            onChange={(event)=>setValue({...value,firstName:event.target.value})}
            placeholder="Enter your first Name"required/>
          </div> 
          <div className="fate" >
            <span className="rake">By continueing you agree to</span> 
            <span className="yam"><a href="">terms and condition</a></span>
          </div>
          <div className="cake"><button>signUp</button></div>
       </form>
      </div>
   </div>
    
    
  </div>
  )
}
export default Sign;