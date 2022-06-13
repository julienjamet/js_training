const x = document.getElementById("x");
const y = document.getElementById("y");

document.addEventListener("mousemove", function(e) {
    x.textContent = `(X = ${e.pageX}) /`;
    y.textContent = ` (Y = ${e.pageY})`;
});