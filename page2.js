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
    else if (e.key === "A") {
        keypressContainer.style.background = "green";
        right(); 
    }
    else if (e.key === "e") {
        keypressContainer.style.background = "green";
        right(); 
    }
    else if (e.key === "E") {
        keypressContainer.style.background = "green";
        right(); 
    }
    else if (e.key === "i") {
        keypressContainer.style.background = "green";
        right();  
    }
    else if (e.key === "I") {
        keypressContainer.style.background = "green";
        right(); 
    }
    else if (e.key === "o") {
        keypressContainer.style.background = "green";
        right();  
    }
    else if (e.key === "O") {
        keypressContainer.style.background = "green";
        right(); 
    }
    else if (e.key === "u") {
        keypressContainer.style.background = "green";
        right();  
    }
    else if (e.key === "U") {
        keypressContainer.style.background = "green";
        right(); 
    }
    else if (e.key === "y") {
        keypressContainer.style.background = "green";
        right();  
    }
    else if (e.key === "Y") {
        keypressContainer.style.background = "green";
        right(); 
    }
    else {
        keypressContainer.style.background = "red";
        wrong();
    }
})