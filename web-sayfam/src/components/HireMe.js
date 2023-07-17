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
<p >miraccangursoy1@gmail.com</p>
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
<text>
    Github
</text>
</div>
<div>
<text>
    Linkedin
</text>
</div>

</div>

        
</div>
        </div>
    )
    
}