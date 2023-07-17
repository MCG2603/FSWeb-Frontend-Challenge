export function HireMe(props){
    const check=props.check
    const en=props.arrEn;
   const tr=props.arrTr;
   const posts=props.posts

    return(
        <div id={check ? "dark" :""} ref={props.ref2}>

<div class='container3'>
<div class='f1'>
<h1>{posts[24]}</h1>
</div>
<div class='c1'>
<div>
<a href="#" class="j">miraccangursoy1@gmail.com</a>
</div>

<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div>
<text>
{posts[25]}
</text>
</div>
<div>
< a href="https://github.com/MCG2603" class="k a11"  >
    Github
</a>
</div>
<div>
<a   href="https://www.linkedin.com/in/mira%C3%A7-can-g%C3%BCrsoy-1ba63442/"  class="l a11" >
    Linkedin
</a>
</div>

</div>

        
</div>
        </div>
    )
    
}