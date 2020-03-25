

function rollMe(randomNumber, image) {
    switch (randomNumber) {
        case 1:
            document.querySelector(image).setAttribute("src", "./images/dice1.png");
            break;
        case 2:
            document.querySelector(image).setAttribute("src", "./images/dice2.png");
            break;
        case 3:
            document.querySelector(image).setAttribute("src", "./images/dice3.png");
            break;
        case 4:
            document.querySelector(image).setAttribute("src", "./images/dice4.png");
            break;
        case 5:
            document.querySelector(image).setAttribute("src", "./images/dice5.png");
            break;
        case 6:
            document.querySelector(image).setAttribute("src", "./images/dice6.png");
            break;
    }
}



document.querySelector(".btn").addEventListener("click", function (){
    console.log("I was clicked")
    let randomNumberOne = Math.floor(Math.random() * 6) + 1
    let randomNumberTwo = Math.floor(Math.random() * 6) + 1
    rollMe(randomNumberOne, ".img1");
    rollMe(randomNumberTwo, ".img2");

    if (randomNumberOne === randomNumberTwo) {
        document.querySelector("h1").innerHTML = "It's a tie!"
    } else if (randomNumberOne > randomNumberTwo) {
        document.querySelector("h1").innerHTML = "Player One Wins!"
    } else {
        document.querySelector("h1").innerHTML = "Player Two Wins!"
    }
})