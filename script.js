let order = [];
let clickOrder = [];
let score = 0;

//0-green 1-red 2-yellow 3-blue

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

/*----------Random Colors----------- */
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
/*----------Random Colors----------- */

/*----------Next color----------- */
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, number - 250);

    setTimeout(() => {
        element.classList.remove("selected");
    })
}
/*----------Next color----------- */

/*----------Check keypress order----------- */
let checkOrder = () => {
    for(let i in clickOrder) {
        if(clickOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if(clickOrder.length == order.length) {
        alert(`Score: ${score}\n You got it. Starting next level! `);
        nextLevel();
    }
}
/*----------Check keypress order----------- */

/*----------User Click----------- */
let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add("selected");

    setTimeout(() => {
        createColorElement(color).classList.remove("selected");
        checkOrder();
    }, 250);

    
}
/*----------User Click----------- */


/*----------Color return----------- */
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    }else if (color == 3) {
        return blue;
    }
}
/*----------Color return-----------*/

/*----------Next Level-----------*/
let nextLevel = () => {
    score++;
    shuffleOrder();
}
/*----------Next Level-----------*/

/*----------Game Over-----------*/
let gameOver = () => {
    alert(`Score: ${score}\n You lost. Click here to start a new Game!`);
    order=[];
    clickOrder=[];

    playGame();
}
/*----------Game Over-----------*/

/*----------Start-----------*/
let playGame = () => {
    alert(`Start new Game!`)
    score = 0;

    nextLevel();
}
/*----------Start-----------*/

/*----------Start-----------*/
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();