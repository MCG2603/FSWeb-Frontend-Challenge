
import { useState } from "react";
import "./Header.css"; 
import Toggle from 'react-styled-toggle';


export function Header(props){
   const setCheck1=props.setCheck1
   const check=props.check
   const dil=props.dil
   const dilChange=props.dilChange
    


return(
<div id={check ? "dark" :""}> 
    <div class="a">
        <div>

        </div>
        <div>
           <Toggle onChange={setCheck1}  height='20' labelRight={!check? "DARK MODE":"LIGHT MODE"}/> 
        </div>
        <div>|</div>
        <div><button onClick={dilChange}>{dil}</button> 'YE GEÇ</div>
    </div>
    <div class='c'>
        <div>
        <p id={!check? "circle":"circled"}class="b">MCG</p>
        </div>
      
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
            <div>
            <button onClick={props.s} >
                Skills
            </button>
            </div>
            <div>
            <button onClick={props.p}>
                Projects
            </button>
            </div>
            <div>
            <button onClick={props.h}>
                Hire me
            </button>
            </div>
           
        </div>
      
       
    </div>
  
)
}