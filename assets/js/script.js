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
const output = document.querySelector(".output")


const playerTeam = [];
const enemyTeam = [];
let newMonster = null;
let activePlayerMonster = null;
let activeEnemyMonster = null;
const moveList = new MonsterDeck();


const TEAM_SELECTIONS = [
    {
        name: "bruk",
        sprite: "/assets/images/bruk-sprite.png",
        icon: "/assets/images/bruk-icon.png",
        controller: null,
        position: null,
        speed: 1,
        health: 15,
        moves: [
            moveList.smash,
            moveList.grind,
            moveList.polyfilla,
            moveList.spark
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

teamSelectionButtons.forEach(teamSelectionButtons => {
    teamSelectionButtons.addEventListener('click', e => {
        selectTeamMember(teamSelectionButtons)

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
    if(playerTeam.length > 0){
        createEnemyTeam()
        startFight()
        showPopup(battlePopup)
    }else{
        console.log("you need someone on your team")
    }

})


moveButtons.forEach(teamSelectionButtons => {
    teamSelectionButtons.addEventListener('click', e => {
        let i = 0
        if(activePlayerMonster != null){
            console.log(moveList[i])
            activePlayerMonster.moveList[i]()
        }
        i++
    })
})



teamPopupButton.addEventListener("click", e =>{
        showPopup(teamPopup)    
});

function selectTeamMember(element){
    const selectedMonster = element.dataset.monster

    newMonster = new Monster(TEAM_SELECTIONS.find(monster => monster.name === selectedMonster))
    newMonster.position = playerTeam.length
    newMonster.controller = "player"

    if(playerTeam.length < 6) {
    playerTeam.push(newMonster)
    
    for(let i = 0; i < playerTeam.length; i++)
    {
        portraitDivs[i].style.backgroundImage = "url(" + playerTeam[i].icon + ")";
    }
    } else {
        
        console.log("Team full")
    }
}

function DoMove(){

}

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
        enemyTeam[i].position = i
        enemyTeam.controller = "comp"
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
    activePlayerMonster = playerTeam[0]
    activeEnemyMonster = enemyTeam[0]

    playerMonsterPlaceholder.style.backgroundImage = "url(" + activePlayerMonster.sprite + ")"
    enemyMonsterPlaceholder.style.backgroundImage = "url(" + activeEnemyMonster.sprite + ")"
    playerHealthBar.innerHTML = "HP: " + activePlayerMonster.health
    enemyHealthBar.innerHTML = "HP: " + activeEnemyMonster.health

    
    moveButtons.forEach(moveButtons => {
        console.log(playerTeam[0].moves[i])
        moveButtons.innerHTML = activePlayerMonster.moves[i].name
        i++
    })
    PrintOutput(activePlayerMonster.name + " is fighting enemy " + activeEnemyMonster.name)
}

function PrintOutput(message)
{
    output.innerHTML = message;
}