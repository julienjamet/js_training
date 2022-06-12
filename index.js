/*
let total = 0;

function addition(x) {
    total += x; 
    return total;
}

function soustraction(x) {
    total -= x; 
    return total;
}

function multiplication(x) {
    total *= x; 
    return total;
}

function division(x) {
    total /= x; 
    return total;
}

function reset() {
    total = 0; 
}

console.log(addition(3));
console.log(addition(5));
console.log(soustraction(8));
console.log(soustraction(14));
console.log(addition(3));
console.log(multiplication(10));
console.log(division(2));
reset();
console.log(total);
*/

/*----------------------------------------------------*/

/*
const test = document.querySelector("h4");
console.log(test);
test.style.background = "green";
*/

/*----------------------------------------------------*/

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn--1");
const btn2 = document.querySelector("#btn--2");
const response = document.querySelector("p");

btn1.addEventListener("click", function() {
    response.classList.toggle("p--visible--false");
    response.classList.remove("p--visible--true");
    questionContainer.classList.toggle("question-click--false");
    questionContainer.classList.remove("question-click--true");
})
btn2.addEventListener("click", function() {
    response.classList.toggle("p--visible--true");
    response.classList.remove("p--visible--false");
    questionContainer.classList.toggle("question-click--true");
    questionContainer.classList.remove("question-click--false");

})
btn1.addEventListener("mouseenter", function() {
    btn1.style.transform = "scale(1.1)";
})
btn1.addEventListener("mousedown", function() {
    btn1.style.background = "white";
    btn1.style.fontWeight = "bold";
})
btn1.addEventListener("mouseup", function() {
    btn1.style.background = "#EFEFEF";
    btn1.style.fontWeight = "normal";
})
btn1.addEventListener("mouseout", function() {
    btn1.style.transform = "scale(1)";
})


btn2.addEventListener("mouseenter", function() {
    btn2.style.transform = "scale(1.1)";
})
btn2.addEventListener("mousedown", function() {
    btn2.style.background = "white";
    btn2.style.fontWeight = "bold";
})
btn2.addEventListener("mouseup", function() {
    btn2.style.background = "#EFEFEF";
    btn2.style.fontWeight = "normal";
})
btn2.addEventListener("mouseout", function() {
    btn2.style.transform = "scale(1)";
})


/*
questionContainer.addEventListener("click", function() {
    questionContainer.classList.toggle("question-click");
    console.log("Click !");
})
*/
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const right = function() {
    const audio = new Audio();
    audio.src = "./right.mp3";
    audio.play();
}

const wrong = function() {
    const audio = new Audio();
    audio.src = "./wrong.mp3";
    audio.play();
}

document.addEventListener("keypress", function(e) {
    key.textContent = e.key;

    if (e.key === "a") {
        keypressContainer.style.background = "green";
        right();
    }
    else if (e.key === "e") {
        keypressContainer.style.background = "green";
        right(); 
    }
    else if (e.key === "i") {
        keypressContainer.style.background = "green";
        right();  
    }
    else if (e.key === "o") {
        keypressContainer.style.background = "green";
        right();  
    }
    else if (e.key === "u") {
        keypressContainer.style.background = "green";
        right();  
    }
    else if (e.key === "y") {
        keypressContainer.style.background = "green";
        right();  
    }
    else {
        keypressContainer.style.background = "red";
        wrong();
    }
})

const nav = document.querySelector("nav");

window.addEventListener("scroll", function() {
    if (this.window.scrollY > 400) {
        nav.style.top = 0;
    }
    else {
        nav.style.top = "-50px";
    }
})
