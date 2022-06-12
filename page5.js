const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        result.textContent += e.target.id;
    });
});

equal.addEventListener("click", function() {
    result.textContent = eval(result.textContent);
});

clear.addEventListener("click", function() {
    result.textContent = "";
});