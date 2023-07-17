import { forwardRef } from "react"

 export function Head(props){
    const check=props.check
return(
<div id={check ? "dark" :""}>

        <div class='container'>
        <div class='d'>
        <div class="line-1"></div>
        <div>Miraç Can Gürsoy</div>
        </div>
        <div class='g'>
            <div class='f'>
                <h1 class='e'>Creative thinker 
                    Minimalism Lover
                </h1>
                <p>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
                <div class='h'>
                    <button>Hire me </button>
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
