let gameSeq=[];
let plyrSeq=[];

let btns=["rhino","cat","dog","frog"];
let start=false;
let level=0;
let highscr=document.querySelector("#high");
let scr=0;

let strtbtn=document.querySelector("#start");
strtbtn.addEventListener("click",function(){
    if(start==false){
       start=true;
         for(btn of allbtns){
        btn.addEventListener("click",btnpress);
    }
      levelup();
      res.innerHTML="";
      
    }
     
    
})

function gameflash(btn){
    let icn=btn.children[0];
    icn.classList.add("gameflash");
    btn.classList.add("gameflash");
    setTimeout(() => {
        icn.classList.remove("gameflash")
        btn.classList.remove("gameflash");
    }, 270);

}
function userflash(btn){
btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove("userflash");
},250);
}

let lvlnum=document.querySelector("h3");

function levelup(){
    
    if(scr<=(level*10)){
scr=level*10;
highscr.innerText=`Highest Score ${scr}`;
    }
    plyrSeq=[];
    level++;
    lvlnum.innerText=level;
//random btn
let rndidx=Math.floor(Math.random()*4);
let rndani=btns[rndidx];//random animal
let rndbtn=document.querySelector(`.${rndani}`);
gameSeq.push(rndani);
console.log(gameSeq);
    gameflash(rndbtn);
}


function btnpress(){
    let btn=this;
    userflash(btn);
    let animl=btn.getAttribute("id");
plyrSeq.push(animl);
checkAns(plyrSeq.length-1);
}
let res=document.querySelector("p");
function checkAns(idx){
    
    
    if(plyrSeq[idx]===gameSeq[idx]){
        if(plyrSeq.length==gameSeq.length){
            setTimeout(function(){
                levelup();
            },1000);
           
        }
       
    }
    else{
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="#26333b";
        },250);
        res.innerHTML=`Wrong input! Your score is <b>${(level-1)*10}</b> <br> Game is Over. <b>Try Again</b>`;
        reset();
    }

}
function reset(){
    start=false;
    level=0;
    gameSeq=[];
    plyrSeq=[];
    strtbtn.innerText="Restart";

  

}

let allbtns=document.querySelectorAll(".btn");





