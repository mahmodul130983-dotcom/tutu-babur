/* ==========================
   Typing Messages
========================== */

const messages = [
"Hey Sumu... 💜",
"I know you're not feeling your best today. 🌸",
"So please don't worry about anything...",
"Drink some water 💧",
"Take enough rest 😴",
"You are beautiful every single day. 🌷",
"And I'm always with you. ❤️"
];

const typing = document.getElementById("typing");
const button = document.getElementById("startBtn");

let msgIndex = 0;
let charIndex = 0;

/* ==========================
   Typing Effect
========================== */

function typeText(){

    if(charIndex < messages[msgIndex].length){

        typing.innerHTML += messages[msgIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,60);

    }else{

        setTimeout(nextMessage,1800);

    }

}

function nextMessage(){

    charIndex = 0;

    msgIndex++;

    if(msgIndex >= messages.length){

        msgIndex = 0;

    }

    typing.innerHTML = "";

    typeText();

}

typeText();

/* ==========================
   Button Click
========================== */

button.onclick = function(){

button.innerHTML = "I Love You Forever ❤️";

typing.innerHTML =
"🫂 Sending you the biggest virtual hug...<br><br>🌸 I hope you feel better soon, my strongest girl.";

button.style.transform = "scale(1.08)";

setTimeout(()=>{
button.style.transform="scale(1)";
},300);

}

/* ==========================
   Floating Lily Petals
========================== */

const container = document.getElementById("lily-container");

function createPetal(){

const petal = document.createElement("div");

petal.innerHTML="🌸";

petal.style.position="absolute";

petal.style.left=Math.random()*100+"%";

petal.style.top="-50px";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.opacity=.9;

petal.style.transition="transform linear";

container.appendChild(petal);

let duration=7000+Math.random()*4000;

let rotate=Math.random()*360;

petal.animate(

[
{
transform:`translateY(0px) rotate(0deg)`
},
{
transform:`translateY(${window.innerHeight+100}px) translateX(${Math.random()*120-60}px) rotate(${rotate}deg)`
}
],

{
duration:duration,
iterations:1
}

);

setTimeout(()=>{

petal.remove();

},duration);

}

setInterval(createPetal,500);

/* ==========================
   Title Glow
========================== */

const title=document.getElementById("title");

setInterval(()=>{

title.style.textShadow="0 0 25px #ff7bc2";

setTimeout(()=>{

title.style.textShadow="none";

},900);

},2500);
/* ==========================================
   PART 7.1
   ENDING FADE
========================================== */

const ending=document.querySelector(".ending");

window.addEventListener("scroll",()=>{

if(!ending) return;

const top=ending.getBoundingClientRect().top;

if(top<window.innerHeight-120){

ending.style.opacity="1";

ending.style.transform="translateY(0)";

}

});
