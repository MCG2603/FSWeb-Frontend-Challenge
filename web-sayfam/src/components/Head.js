import { forwardRef } from "react"
import 'bootstrap';

 export function Head(props){
    const check=props.check
    const en=props.arrEn;
   const tr=props.arrTr;
   const dil=props.dil;
   const posts=props.posts
   
return(
<div id={check ? "dark" :""}>

        <div class='container'>
        <div class='d'>
        <div class="line-1"></div>
        <div>Miraç Can Gürsoy</div>
        </div>
        <div class='g'>
            <div class='f1a'>
                <h1 class='e'>{posts[5]}
                </h1>
                <p class="f1a">
                   {posts[6]}
                </p>
                <div class='h'>
                    
                < a  id="z" class="button" onClick={props.h}>{posts[4]} </a>
                 < a href="https://github.com/MCG2603" id="x"  class="button a11"> <i class="fa fa-github" style={{fontSize:"14px"}}></i>
Github</a>
                    <a   href="https://www.linkedin.com/in/mira%C3%A7-can-g%C3%BCrsoy-1ba63442/" id="x" class="button a11"  > <i class="fa fa-linkedin-square"></i>Linkedin</a>
                </div>
            </div>
            <div class='connn5'>
          </div>
        </div>

        </div>
</div>

)

}
