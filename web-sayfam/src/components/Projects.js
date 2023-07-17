export function Projects(props){
    const h=props.h
    const check=props.check
    const en=props.arrEn;
   const tr=props.arrTr;
   const posts=props.posts
    return(
        <div  id={check ? "dark" :""}ref={props.ref1}>

<div class='container'>
<h1>{posts[19]}</h1>

<div class='g'>
<div class='container1'>
<div class='connn6'>
</div>
    <h2>Workintech</h2>
    <p class="f1a">{posts[20]}
</p>
<div class='h'>
        <button onClick={h}>{posts[4]} </button>
        <button>Github</button>
        <button>Linkedin</button>
    </div>
    <div class='g3'>
        <button>Github</button>
        <button>Linkedin</button>
    </div>
    </div>
    <div class='container1a'>
    <div class='connn6'>
</div>
    <h2>{posts[21]}</h2>
    <p class="f1a">{posts[22]}
</p>
<div class='h'>
        <button onClick={h}>{posts[4]} </button>
        <button>Github</button>
        <button>Linkedin</button>
    </div>
    <div class='g3'>
        <button>Github</button>
        <button>Linkedin</button>
    </div>
    </div>
    <div class='container1a'>
    <div class='connn6'>
</div>
    <h2>{posts[23]}</h2>
    <p class="f1a">{posts[20]}
</p>
<div class='h'>
        <button onClick={h}>{posts[4]} </button>
        <button>Github</button>
        <button>Linkedin</button>
    </div>
    <div class='g3'>
        <button>Github</button>
        <button>Linkedin</button>
    </div>
    </div>
  

</div>

</div>
        </div>
    )
}