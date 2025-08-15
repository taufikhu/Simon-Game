let gameSeq=[];
let userSeq=[];

let btns = ["yel", "red", "pup", "green"];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let body = document.querySelector("body");

document.addEventListener("keypress", function(){
   if(started == false){
    console.log("game started");
    started = true;
    levelup();
   }

});

function levelup(){
    userSeq = [];
level++;
h3.innerText = `Level ${level}`;
let randIdx = Math.floor(Math.random()*3);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`);
// console.log(randIdx);
// console.log(randColor);
// console.log(randBtn);
gameSeq.push(randColor);
 //console.log(gameSeq);
btnFlash(randBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
      btn.classList.remove("flash");  
    },250);

}

function checkAns(idx){

if(userSeq[idx]=== gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelup, 1000);
    }
}else
{
    body.classList.add("over");
  setTimeout(function(){
    body.classList.remove("over");
    h3.innerText = `Oops! you lost!, Press any key to start..`; 
  },250);
  reset();
}
}


function btnPress(){
   let btn= this;
   btnFlash(btn);

   userColor = btn.getAttribute("id");
 
   userSeq.push(userColor);
  //console.log(userSeq)
   checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}