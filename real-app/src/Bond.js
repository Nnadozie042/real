import React,{useEffect,useRef,useState} from 'react';
import { FaHeart} from 'react-icons/fa';
import {motion}from 'framer-motion';
import fan from './fan.png'
const Bond =()=>{
     
    const[width,setWidth]=useState(0);
    const carousel=useRef();

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    },[]);
    return(
        <div className="high-container">
            <motion.div ref={carousel}className="carousel">
                < motion.div drag="x" dragConstraints={{right:0,left:-width}} className="lamp">
                    <div className="Work-load">
                        <div className="first-work">
                            <div className="last-image"><img src={fan}alt=""/></div>
                            <div className="first-text">
                                <div className="text-font"><p className="low">FGN savings Bond</p></div>
                            </div>
                            </div>
                            <p className="mouse">730 days saving bond</p>
                            <p className="excuses">Due october 12, 2024</p>
                            <div className="chair">
                                <div className="heat">
                                    <div className="rice">minimum</div>
                                    <div className="beans">#5000</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">% per year</div>
                                    <div className="beans">#11.382%</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">interest payment</div>
                                    <div className="beans">quartely</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">opening</div>
                                    <div className="beans">oct/04/2022</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">closing date</div>
                                    <div className="beans">oct/07/2022</div>
                                 </div>  
                                  <div className="heat">
                                    <div className="rice">settlement</div>
                                    <div className="beans">oct/12/2022</div>
                                 </div>

                              </div>
                               <div className="love">
                                <span className="emoji"><button>Add cart</button></span>
                                <span className="rest"><FaHeart style={{fontSize:15,color:'gray'}}/></span>
                               </div>

                    </div>

                    <div className="Work-maths">
                    <div className="first-work">
                            <div className="last-image"><img src={fan}alt=""/></div>
                            <div className="first-text">
                                <div className="text-font"><p className="low">FGN savings Bond</p></div>
                            </div>
                            </div>
                            <p className="mouse">730 days saving bond</p>
                            <p className="excuses">Due october 12, 2024</p>
                            <div className="chair">
                                <div className="heat">
                                    <div className="rice">minimum</div>
                                    <div className="beans">#5000</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">% per year</div>
                                    <div className="beans">#11.382%</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">interest payment</div>
                                    <div className="beans">quartely</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">opening</div>
                                    <div className="beans">oct/04/2022</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">closing date</div>
                                    <div className="beans">oct/07/2022</div>
                                 </div>  
                                  <div className="heat">
                                    <div className="rice">settlement</div>
                                    <div className="beans">oct/12/2022</div>
                                 </div>

                              </div>
                               <div className="love">
                                <span className="emoji"><button>Add cart</button></span>
                                <span className="rest"><FaHeart style={{fontSize:25,color:'gray'}}/></span>
                               </div>

                    </div>
                    <div className="Work-english">
                    <div className="first-work">
                            <div className="last-image"><img src={fan}alt=""/></div>
                            <div className="first-text">
                                <div className="text-font"><p className="low">FGN savings Bond</p></div>
                            </div>
                            </div>
                            <p className="mouse">730 days saving bond</p>
                            <p className="excuses">Due october 12, 2024</p>
                            <div className="chair">
                                <div className="heat">
                                    <div className="rice">minimum</div>
                                    <div className="beans">#5000</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">% per year</div>
                                    <div className="beans">#11.382%</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">interest payment</div>
                                    <div className="beans">quartely</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">opening</div>
                                    <div className="beans">oct/04/2022</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">closing date</div>
                                    <div className="beans">oct/07/2022</div>
                                 </div>  
                                  <div className="heat">
                                    <div className="rice">settlement</div>
                                    <div className="beans">oct/12/2022</div>
                                 </div>

                              </div>
                               <div className="love">
                                <span className="emoji"><button>Add cart</button></span>
                                <span className="rest"><FaHeart style={{fontSize:25,color:'gray'}}/></span>
                               </div>
                    </div>
                    <div className="Work-chem">
                    <div className="first-work">
                            <div className="last-image"><img src={fan}alt=""/></div>
                            <div className="first-text">
                                <div className="text-font"><p className="low">FGN savings Bond</p></div>
                            </div>
                            </div>
                            <p className="mouse">730 days saving bond</p>
                            <p className="excuses">Due october 12, 2024</p>
                            <div className="chair">
                                <div className="heat">
                                    <div className="rice">minimum</div>
                                    <div className="beans">#5000</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">% per year</div>
                                    <div className="beans">#11.382%</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">interest payment</div>
                                    <div className="beans">quartely</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">opening</div>
                                    <div className="beans">oct/04/2022</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">closing date</div>
                                    <div className="beans">oct/07/2022</div>
                                 </div>  
                                  <div className="heat">
                                    <div className="rice">settlement</div>
                                    <div className="beans">oct/12/2022</div>
                                 </div>

                              </div>
                               <div className="love">
                                <span className="emoji"><button>Add cart</button></span>
                                <span className="rest"><FaHeart style={{fontSize:25,color:'gray'}}/></span>
                               </div>  
                            </div>
                            <div className="work-agric">
                            <div className="first-work">
                            <div className="last-image"><img src={fan}alt=""/></div>
                            <div className="first-text">
                                <div className="text-font"><p className="low">FGN savings Bond</p></div>
                            </div>
                            </div>
                            <p className="mouse">730 days saving bond</p>
                            <p className="excuses">Due october 12, 2024</p>
                            <div className="chair">
                                <div className="heat">
                                    <div className="rice">minimum</div>
                                    <div className="beans">#5000</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">% per year</div>
                                    <div className="beans">#11.382%</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">interest payment</div>
                                    <div className="beans">quartely</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">opening</div>
                                    <div className="beans">oct/04/2022</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">closing date</div>
                                    <div className="beans">oct/07/2022</div>
                                 </div>  
                                  <div className="heat">
                                    <div className="rice">settlement</div>
                                    <div className="beans">oct/12/2022</div>
                                 </div>

                              </div>
                               <div className="love">
                                <span className="emoji"><button>Add cart</button></span>
                                <span className="rest"><FaHeart style={{fontSize:25,color:'gray'}}/></span>
                               </div> 

                                
                         </div>
                         <div className="work-biology">
                         <div className="first-work">
                            <div className="last-image"><img src={fan}alt=""/></div>
                            <div className="first-text">
                                <div className="text-font"><p className="low">FGN savings Bond</p></div>
                            </div>
                            </div>
                            <p className="mouse">730 days saving bond</p>
                            <p className="excuses">Due october 12, 2024</p>
                            <div className="chair">
                                <div className="heat">
                                    <div className="rice">minimum</div>
                                    <div className="beans">#5000</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">% per year</div>
                                    <div className="beans">#11.382%</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">interest payment</div>
                                    <div className="beans">quartely</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">opening</div>
                                    <div className="beans">oct/04/2022</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">closing date</div>
                                    <div className="beans">oct/07/2022</div>
                                 </div>  
                                  <div className="heat">
                                    <div className="rice">settlement</div>
                                    <div className="beans">oct/12/2022</div>
                                 </div>

                              </div>
                               <div className="love">
                                <span className="emoji"><button>Add cart</button></span>
                                <span className="rest"><FaHeart style={{fontSize:25,color:'gray'}}/></span>
                               </div> 
                         </div>
                         <div className="work-moon">
                         <div className="first-work">
                            <div className="last-image"><img src={fan}alt=""/></div>
                            <div className="first-text">
                                <div className="text-font"><p className="low">FGN savings Bond</p></div>
                            </div>
                            </div>
                            <p className="mouse">730 days saving bond</p>
                            <p className="excuses">Due october 12, 2024</p>
                            <div className="chair">
                                <div className="heat">
                                    <div className="rice">minimum</div>
                                    <div className="beans">#5000</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">% per year</div>
                                    <div className="beans">#11.382%</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">interest payment</div>
                                    <div className="beans">quartely</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">opening</div>
                                    <div className="beans">oct/04/2022</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">closing date</div>
                                    <div className="beans">oct/07/2022</div>
                                 </div>  
                                  <div className="heat">
                                    <div className="rice">settlement</div>
                                    <div className="beans">oct/12/2022</div>
                                 </div>

                              </div>
                               <div className="love">
                                <span className="emoji"><button>Add cart</button></span>
                                <span className="rest"><FaHeart style={{fontSize:25,color:'gray'}}/></span>
                               </div> 
                         </div> 
                         <div className="work-sky">
                         <div className="first-work">
                            <div className="last-image"><img src={fan}alt=""/></div>
                            <div className="first-text">
                                <div className="text-font"><p className="low">FGN savings Bond</p></div>
                            </div>
                            </div>
                            <p className="mouse">730 days saving bond</p>
                            <p className="excuses">Due october 12, 2024</p>
                            <div className="chair">
                                <div className="heat">
                                    <div className="rice">minimum</div>
                                    <div className="beans">#5000</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">% per year</div>
                                    <div className="beans">#11.382%</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">interest payment</div>
                                    <div className="beans">quartely</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">opening</div>
                                    <div className="beans">oct/04/2022</div>
                                </div>
                                <div className="heat">
                                    <div className="rice">closing date</div>
                                    <div className="beans">oct/07/2022</div>
                                 </div>  
                                  <div className="heat">
                                    <div className="rice">settlement</div>
                                    <div className="beans">oct/12/2022</div>
                                 </div>

                              </div>
                               <div className="love">
                                <span className="emoji"><button>Add cart</button></span>
                                <span className="rest"><FaHeart style={{fontSize:25,color:'gray'}}/></span>
                               </div> 
                         </div>

                         
                 
                    
                 </motion.div>
            </motion.div>
        </div>

    )
}
export default Bond;