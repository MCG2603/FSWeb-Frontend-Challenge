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
    <h2 class="l">Workintech</h2>
    <p class="f1a">{posts[20]}
</p>
<div class='h'>
        <button id="x">react </button>
        <button id="x">redux</button>
        <button id="x">axios</button>
    </div>
    <div class='g3'>
    <a href="#" >Github</a>
        <a href="#" >{posts[26]}</a>
    </div>
    </div>
    <div class='container1a'>
    <div class='connn6'>
</div>
    <h2 class="l">{posts[21]}</h2>
    <p class="f1a">{posts[22]}
</p>
<div class='h'>
        <button id="x">react </button>
        <button id="x">redux</button>
        <button id="x">axios</button>
    </div>
    <div class='g3'>
        <a href="#" >Github</a>
        <a href="#" >{posts[26]}</a>
    </div>
    </div>
    <div class='container1a'>
    <div class='connn6'>
</div>
    <h2 class="l">{posts[23]}</h2>
    <p class="f1a">{posts[20]}
</p>
<div class='h'>
        <button id="x">react </button>
        <button id="x">redux</button>
        <button id="x">axios</button>
    </div>
    <div class='g3'>
    <a href="#" >Github</a>
        <a href="#" >{posts[26]}</a>
    </div>
    </div>
  

</div>

</div>
        </div>
    )
}