import React,{useState} from "react";
import list from './Data.js';
import Card from './Card.js';

const Carter=()=>{
    const[cart,setCart]=useState([])
    const HandleClick=(item)=>{
    

    }
    return(
        <div className="fame">
            <div className="list-container">
                {list.map((item)=>(<Card  key={item.id} item={item}  HandleClick={HandleClick}/>
                    
                    
                ))}

            </div>
        </div>
    )

}
export default Carter;