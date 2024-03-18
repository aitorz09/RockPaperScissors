"use strict"
// DOM
const rules = document.querySelector(".rules")
const bkgModal = document.querySelector(".bkgModal1")
const modalRules = document.querySelector(".modalRules")
const closeModal = document.querySelector(".closeModal")
const btnGame = document.querySelectorAll(".btn")
const step1 = document.querySelector(".step1")
const results = document.querySelector(".results")
const resultDivs = document.querySelectorAll(".results_result")
const resultados = document.getElementById("#resultados")
const playAgain = document.querySelector(".playAgain")
const winner = document.querySelector(".winner")
const resultText = document.querySelector(".results__text")
// GAME LOGIC
const Choices = [
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "rock",
        beats: "scissors"
    },
    {
        name: "scissors",
        beats: "paper"
    }
]
btnGame.forEach((button) => {
    button.addEventListener('click', () => {
        const choiceName = button.dataset.choice
        const choice = Choices.find(choice => choice.name == choiceName)
        choose(choice)
        results.classList.toggle("hidden")
        playAgain.classList.toggle("hidden")

    })
    
})

playAgain.addEventListener('click', ()=>{
    location.reload()
})
function choose(choice) {
    const aichoice = aiChoose()
    displayResults([choice, aichoice])
    displayWinner([choice,aichoice])
    console.log(choice.name,aichoice)
}
function aiChoose() {
    const rand = Math.floor(Math.random() * Choices.length)
    return Choices[rand]
}
function displayResults(results) {
    resultDivs.forEach((result, indx) => {
        setTimeout(() => {
            result.innerHTML = `
                <div class="item ${results[indx].name}">
                    <button class="${results[indx].name}-btn btn">
                        <img src="./images/icon-${results[indx].name}.svg">
                    </button>
                </div>
            `;
        }, indx * 1000);
    });
    step1.classList.toggle("displayNone");
}
console.log(results)
function displayWinner (results) {
    setTimeout(() => {
       const userWins = isWinner(results)
       const aiwins = isWinner(results.reverse())
       if (userWins){
        resultText.innerText = "You win"
       } else if (aiwins){
        resultText.innerText = "You lose"
       } else {
        resultText.innerText = "Draw"
       }
    }, 2000);
}
function isWinner (results) {
    return results[0].beats === results[1].name
}
// console.log(results.classList.toggle("hidden"))
// MODAL RULES
closeModal.addEventListener('click', () => {
    bkgModal.classList.toggle("bkgModal")
    modalRules.classList.toggle("display")
})
rules.addEventListener('click', () => {
    bkgModal.classList.toggle("bkgModal")
    modalRules.classList.toggle("display")
})
console.log(resultDivs)