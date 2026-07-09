/* ==========================================
   FOR MY STRONGEST GIRL
   PART 1
========================================== */

/* ===========================
   ELEMENTS
=========================== */

const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");
const lilyContainer = document.getElementById("lily-container");

/* ===========================
   TYPING EFFECT
=========================== */

const text = `Hey Sumu... 💜

আমি জানি আজ তোমার শরীরটা খুব ভালো লাগছে না।

তাই আজ শুধু একটা কথা—

তুমি বিশ্রাম নাও।

আমি তোমার হাসিটা আগলে রাখব। ❤️`;

let typingIndex = 0;

function typeWriter() {

    if (!typing) return;

    if (typingIndex < text.length) {

        typing.innerHTML += text.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeWriter, 45);

    }

}

window.addEventListener("load", () => {

    setTimeout(typeWriter, 800);

});


/* ===========================
   START BUTTON
=========================== */

if (startBtn) {

    startBtn.addEventListener("click", () => {

        startBtn.innerHTML = "Always With You 💜";

        startBtn.style.transform = "scale(.95)";

        setTimeout(() => {

            startBtn.style.transform = "scale(1)";

        }, 180);

        document.body.classList.add("opened");

    });

}


/* ===========================
   FLOATING LILY PETALS
=========================== */

function createPetal() {

    if (!lilyContainer) return;

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize = (16 + Math.random() * 18) + "px";

    petal.style.animationDuration =
        (7 + Math.random() * 5) + "s";

    petal.style.opacity =
        0.4 + Math.random() * 0.6;

    lilyContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 12000);

}

setInterval(createPetal, 500);


/* ===========================
   PAGE GLOW
=========================== */

setInterval(() => {

    document.body.classList.toggle("spark");

}, 2000);
/* ==========================================
   SCRIPT.JS
   PART 2
   COMFORT + LETTER CARD
========================================== */

/* ===========================
   ELEMENTS
=========================== */

const comfortBtn = document.getElementById("comfortBtn");
const openBtn = document.getElementById("openWhenBtn");
const messageBox = document.getElementById("messageBox");

/* ===========================
   COMFORT BUTTON
=========================== */

const comfortTexts = [

    "🫂 Virtual Hug",

    "🌸 Forehead Kiss",

    "💜 I'm Always With You",

    "🤍 Rest Well",

    "☕ Warm Hot Chocolate",

    "🌷 You Are Loved"

];

let comfortIndex = 0;

if (comfortBtn) {

    comfortBtn.addEventListener("click", () => {

        comfortBtn.innerHTML = comfortTexts[comfortIndex];

        comfortBtn.style.transform = "scale(.95)";

        setTimeout(() => {

            comfortBtn.style.transform = "scale(1)";

        }, 180);

        comfortIndex++;

        if (comfortIndex >= comfortTexts.length) {

            comfortIndex = 0;

        }

    });

}


/* ===========================
   LETTER MESSAGES
=========================== */

const messages = [

`💧 Drink some water.

Your body deserves kindness today.`,

`🍲 Don't skip your meal.

Even a little warm food is enough.`,

`😴 Take some rest.

You don't have to be strong every minute.`,

`🌸 You're beautiful.

Every single day.

Never forget that.`,

`❤️ I love you more than yesterday.

And tomorrow,

I'll love you even more.`

];

let messageIndex = 0;


/* ===========================
   OPEN LETTER BUTTON
=========================== */

if (openBtn && messageBox) {

    openBtn.addEventListener("click", () => {

        messageBox.style.opacity = "0";
        messageBox.style.transform = "translateY(15px)";

        setTimeout(() => {

            messageBox.innerHTML = messages[messageIndex];

            messageBox.style.opacity = "1";
            messageBox.style.transform = "translateY(0)";

            messageIndex++;

            if (messageIndex >= messages.length) {

                messageIndex = 0;

            }

        }, 250);

    });

}


/* ===========================
   SMALL BUTTON GLOW
=========================== */

const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.filter = "brightness(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.filter = "brightness(1)";

    });

});
/* ==========================================
   SCRIPT.JS
   PART 3
   HEART + ENDING + MUSIC
========================================== */

/* ===========================
   FLOATING HEARTS
=========================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heartPop";

    heart.innerHTML = "💜";

    heart.style.left = (5 + Math.random() * 90) + "vw";

    heart.style.top = (55 + Math.random() * 20) + "vh";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 4000);

}

setInterval(createHeart, 3500);


/* ===========================
   ENDING ANIMATION
=========================== */

const ending = document.querySelector(".ending");

function showEnding() {

    if (!ending) return;

    const top = ending.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {

        ending.style.opacity = "1";
        ending.style.transform = "translateY(0)";

    }

}

window.addEventListener("scroll", showEnding);


/* ===========================
   MUSIC
=========================== */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

if (musicBtn && music) {

    musicBtn.addEventListener("click", () => {

        if (!playing) {

            music.play();

            musicBtn.innerHTML = "⏸ Pause Music";

            playing = true;

        } else {

            music.pause();

            musicBtn.innerHTML = "🎵 Play Music";

            playing = false;

        }

    });

}


/* ===========================
   PAGE LOAD
=========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


/* ===========================
   OPTIONAL AUTO MESSAGE
=========================== */

if (messageBox) {

    setTimeout(() => {

        messageBox.innerHTML =
        "💜 Thank you for being the strongest girl.";

    }, 2000);

}


/* ===========================
   THE END
=========================== */

console.log("❤️ For My Strongest Girl - Project Loaded Successfully");
