
import { useState } from "react";
import "./Header.css"; 
import Toggle from 'react-styled-toggle';


export function Header(props){
   const setCheck1=props.setCheck1
   const check=props.check
   const dil=props.dil
   const dilChange=props.dilChange
   const en=props.arrEn;
   const tr=props.arrTr;
   const posts=props.posts
    


return(
<div id={check ? "dark" :""}> 
    <div class="a">
        <div>

        </div>
        <div>
           <Toggle onChange={setCheck1}  height='20' labelRight={!check? posts[0]:posts[1]}/> 
        </div>
        <div>|</div>
        <div><button id='y' onClick={dilChange} class='l'>{dil}</button> 'YE GEÇ</div>
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
            <button class={check ? "y" :""} id='y' onClick={props.s} >
                {posts[2]}
            </button>
            </div>
            <div>
            <button class={check ? "y" :""} id='y' onClick={props.p}>
            {posts[3]}
            </button>
            </div>
            <div>
            <button class={check ? "y" :""} id='y' onClick={props.h}>
            {posts[4]}            </button>
            </div>
           
        </div>
      
       
    </div>
  
)
}