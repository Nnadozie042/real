import React from "react";
const Card=({item,HandleClick})=>{
 const {font,image,text,price}=item;

    return(
        <div className="container-soil">
           
            <div className="rest">
                <div className="money">
                    <div className="helo"><p>{font}</p></div>
                   
                   <div className="bar">
                  <img style={{width:80,marginLeft:20}} src={image}alt=""/>
                  </div>
                  <p className="bulb">{text}</p>
                  <div className="radio"><button style={{width:130,height:40}} onClick={()=>HandleClick(item)}>Automatic</button>
                  <button style={{width:130,height:40,borderStyle:"hidden"}}>Delete</button></div>
               
                </div>
                
        
           <div className="details">
              
                <p>{price}</p>
            </div>
            </div>
            </div>
        

    )
}
export default Card;