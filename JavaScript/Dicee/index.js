let randomNumber1 = Math.round(Math.random() * 5) + 1
console.log(randomNumber1)
document.querySelector(".dice .img1").setAttribute(
    "src", `./images/dice${randomNumber1}.png`)

let randomNumber2 = Math.round(Math.random() * 5) + 1
console.log(randomNumber2)
document.querySelector(".dice .img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

// check the condition a show the result 
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Drown";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 win";
} else {
    document.querySelector("h1").textContent = "Player 2 win";
}