const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector("[data-computer-score]")
const yourScoreSpan = document.querySelector("[data-your-score]")
const teamPopupButton = document.querySelector(".select-team")
const teamPopup = document.querySelector(".team-select-popup")
const battlePopup = document.querySelector(".battle-popup")
const teamSelectionButtons = document.querySelectorAll('.team-selection')
const brukButton = document.querySelector("#bruk")
const removeButton = document.querySelector("#remove")
const portraitDivs = document.querySelectorAll(".team-roster-position")
const moveButtons = document.querySelectorAll(".move-button")
const fightButton = document.querySelector("#start-fight")
const playerMonsterPlaceholder = document.querySelector(".player-placeholder")
const enemyMonsterPlaceholder = document.querySelector(".enemy-placeholder")
const playerHealthBar = document.querySelector(".player-health-bar")
const enemyHealthBar = document.querySelector(".enemy-health-bar")


const playerTeam = [];
const enemyTeam = [];
let newMonster = null;

const SELECTIONS = [
    {
        name: "rock",
        beats: "scissors"
    },
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    }
]

const TEAM_SELECTIONS = [
    {
        name: "bruk",
        sprite: "/assets/images/bruk-sprite.png",
        icon: "/assets/images/bruk-icon.png",
        position: null,
        speed: 1,
        health: 15,
        moves: [
            "smash",
            "grind",
            "polyfilla",
            "spark"
        ]
    },
    {
        name: "blinky",
        sprite: "/assets/images/blinky-sprite.png",
        icon: "/assets/images/blinky-icon.png",
        position: null,
        health: 8,
        speed: 4,
        moves: [
            "stare",
            "slap",
            "scratch",
            "contact lense"
        ]
    },
    {
        name: "blady",
        position: null,
        health: 10,
        speed: 3
    }

]

/*brukButton.addEventListener("click", e => {

    playerTeam.push("bruk")
    console.log(newMonster)...MonstersDeck["m001"].name
})*/

teamSelectionButtons.forEach(teamSelectionButtons => {
    teamSelectionButtons.addEventListener('click', e => {
        const selectedMonster = teamSelectionButtons.dataset.monster
        console.log(newMonster)
        newMonster = new Monster(TEAM_SELECTIONS.find(monster => monster.name === selectedMonster))
        console.log(newMonster.sprite)
        newMonster.position = playerTeam.length

        if(playerTeam.length < 6) {
        playerTeam.push(newMonster)
        console.log(playerTeam)
        console.log(newMonster)
        
        for(let i = 0; i < playerTeam.length; i++)
        {
            portraitDivs[i].style.backgroundImage = "url(" + playerTeam[i].icon + ")";
        }
        } else {
            
            console.log("Team full")
        }
    })
})

removeButton.addEventListener("click", e => {
    if(playerTeam.length >= 1) {
        let i = playerTeam.length - 1

        portraitDivs[i].style.backgroundImage = "url(/assets/images/empty-icon.png";

        playerTeam.pop()

        console.log(playerTeam)
    } else {
        console.log("Team empty")
    }
})

fightButton.addEventListener('click', e => { 
    if(playerTeam.length > 1){
        createEnemyTeam()
        startFight()
        showPopup(battlePopup)
    }else{
        console.log("you need someone on your team")
    }

})





teamPopupButton.addEventListener("click", e =>{
        showPopup(teamPopup)    
    });



function makeSelection(selection){
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const oppWinner = isWinner(computerSelection, selection);

    addSelectionResult(computerSelection, oppWinner);
    addSelectionResult(selection, yourWinner);
    if (yourWinner) incrementScore(yourScoreSpan)
    if (oppWinner)incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan)
{
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner){
    const div = document.createElement("div")
    div.innerText = selection.name
    div.classList.add("result-selection")
    if(winner) div.classList.add("winner")
    finalColumn.after(div)
    
}

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}



function createEnemyTeam(){
    enemyTeam.length = 0
    for(let i = 0; i < playerTeam.length; i++){
        const randInt = Math.floor(Math.random() * TEAM_SELECTIONS.length)
        enemyTeam.push(TEAM_SELECTIONS[randInt])
    }
    console.log(enemyTeam)
}

function showPopup(element){
    if(element.classList.contains("show")){ 
        element.classList.remove("show")
    } else { !element.classList.contains("show") 
        element.classList.add("show");
    }
}


function startFight(){
    let i = 0;
    let j = 0;
    playerMonsterPlaceholder.style.backgroundImage = "url(" + playerTeam[0].sprite + ")"
    playerHealthBar.innerHTML = "HP: " + playerTeam[0].health
    enemyMonsterPlaceholder.style.backgroundImage = "url(" + enemyTeam[0].sprite + ")"
    enemyHealthBar.innerHTML = "HP: " + enemyTeam[0].health
    moveButtons.forEach(moveButtons => {
        moveButtons.innerHTML = playerTeam[0].moves[i]
        i++
    })
        


}
