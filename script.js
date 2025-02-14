let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissor=document.getElementById("scissor");

let options=['paper','rock','scissor'];

let turn=(user)=>{
    let comp=options[Math.floor( Math.random()*3)];
    let output=document.querySelector(".output");
    let us=document.querySelector("#user");
    let cs=document.querySelector("#computer");
    if(user===comp){
        output.innerText='It Was Draw !';
        output.style.backgroundColor='#201e1f';
    }
    else if((user==='rock'&&comp==='scissor')||(user==='scissor'&&comp==='paper')||(user==='paper'&&comp==='rock')){
        output.innerText=`You Won !. ${user} beats ${comp}`;
        us.innerText=`${parseFloat(us.innerText)+1}`;
        output.style.backgroundColor='green';
    }
    else{
        output.innerText=`You Lost !. ${comp} beats ${user}`;
        cs.innerText=`${parseFloat(cs.innerText)+1}`;
        output.style.backgroundColor='red';
    }
}

rock.addEventListener("click",()=>{ turn('rock') });
paper.addEventListener("click",()=>{ turn('paper') });
scissor.addEventListener("click",()=>{ turn('scissor') });

rock.addEventListener("touchstart",()=>{ turn('rock') });
paper.addEventListener("touchstart",()=>{ turn('paper') });
scissor.addEventListener("touchstart",()=>{ turn('scissor') });

rock.addEventListener("keydown",()=>{ turn('rock') });
paper.addEventListener("keydown",()=>{ turn('paper') });
scissor.addEventListener("keydown",()=>{ turn('scissor') });