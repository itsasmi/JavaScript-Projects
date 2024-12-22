
let btn = document.getElementById("submit")
let hint = document.getElementById("hint")
let guess = true;
let final = Math.floor(Math.random() * 100);
console.log(final);
console.log("Started", typeof (guess));
btn.addEventListener("click", () => {
    let num = document.getElementById("number").value.trim();
    console.log(final)
    document.getElementById("number").value = " "
    if (num === "") {
        hint.textContent = "Enter a Valid Number!!!"
    }
    else {
        num = Number(num);
        if (num === final) {
            hint.textContent = "You Guessed it Correct"
            const restartBtn = document.createElement("button");
            restartBtn.textContent = "Restart"
            restartBtn.style.backgroundColor = "Red"
            btn.style.display = "none";
            document.getElementById("number").style.display = "none";
            document.getElementById("gamebox").appendChild(restartBtn);
            restartBtn.addEventListener("click", () => {
                location.reload(); // Reload the page to restart the game
            });
            console.log("You Guessed it Correct");
            guess = false;
        }
        else if (num > final) {
            hint.textContent = "Enter smaller number ";
        }
        else if (num < final) {
            hint.textContent = "Enter a larger Number"
        }
    }
}
)
//let num = prompt("Enter a Number =");

