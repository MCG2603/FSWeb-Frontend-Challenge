export function Skills(props){
const c=props.ref3
const check=props.check
const en=props.arrEn;
const tr=props.arrTr;
const posts=props.posts


return(
        <div id={check ? "dark" :""} ref={c}> 
            
<div  class='container'>
<h1>Skills</h1>
<div class='g'>
<div class='container1a'>
    <h2>Java Script</h2>
    <p class="f1a">{posts[7]}
</p>
    </div>
    <div class='container1a'>
    <h2>React Js</h2>
    <p class="f1a">{posts[8]}
</p>
    </div>
    <div class='container1a'>
    <h2>Node Js</h2>
    <p class="f1a">{posts[9]}
</p>
    </div>

</div>

</div>
<div class="line-2"></div>

<div class='container1'>
<h1>{posts[10]}</h1>
<div class='g'>
<div class='container1'>
    <h2>{posts[10]}</h2>
  
    <div class='g1'>
        <div>
        <p>{posts[11]}</p>
        <p>{posts[12]}</p>
        <p>{posts[13]}</p>
        <p>. </p>
        <p>{posts[14]}</p>
  
        </div>
     <div>                   
         <p>26.03.1987</p>
        <p>İstanbul</p>
        <p>Boğaziçi Univ. Math  </p>
        <p>{posts[15]},2023</p>
        <p>Backend</p>
  
        </div>

       </div>
    
      
        
    </div>
  
    <div class='container2'>
    <h2>{posts[16]}</h2>
    <p>{posts[17]}

</p>
<br/>
<p>{posts[18]}

</p>
    </div>

</div>

</div>

        </div>
    )
}