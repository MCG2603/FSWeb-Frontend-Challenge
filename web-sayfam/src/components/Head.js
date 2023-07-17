import { forwardRef } from "react"

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
            <div class='f'>
                <h1 class='e'>{posts[5]}
                </h1>
                <p>
                   {posts[6]}
                </p>
                <div class='h'>
                    <button>{posts[4]} </button>
                    <button>Github</button>
                    <button>Linkedin</button>
                </div>
            </div>
            <div class='connn5'>
          </div>
        </div>

        </div>
</div>

)

}
