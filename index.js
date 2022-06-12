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
});








