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
const rosterDivs = document.querySelectorAll(".team-roster-position")
const swapButtons = document.querySelectorAll(".swap-button")
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

        rosterDivs[i].style.backgroundImage = "url(/assets/images/empty-icon.png";

        playerTeam.pop()

        console.log(playerTeam)
    } else {
        console.log("Team empty")
    }
})

fightButton.addEventListener('click', e => { 
    if(playerTeam.length > 0){
        createEnemyTeam()
        CommenceFight()
        showPopup(battlePopup)
    }else{
        console.log("you need someone on your team")
    }

})



teamPopupButton.addEventListener("click", e =>{
        showPopup(teamPopup)

});

function PopulateMoveButtons(){

    if(activePlayerMonster != null){

        let i = 0

        moveButtons.forEach(moveButtons => {
            console.log(activePlayerMonster.moves[i])
    
            moveButtons.innerHTML = activePlayerMonster.moves[i].name
            console.log("marco")
            console.log(i.toString())
            if(i < activePlayerMonster.moves.length){
                let j = moveButtons.dataset.slot
                moveButtons.addEventListener('click', e => {
                    console.log("polo")
                    
                    console.log(activePlayerMonster.moves[j])
                activePlayerMonster.moves[j]("player", activePlayerMonster, activeEnemyMonster)
                })
            }
            i++
                


        })
    }
}

function selectTeamMember(element){
    newMonster = new Monster(TEAM_SELECTIONS.find(monster => monster.name === element.dataset.monster))
    newMonster.position = playerTeam.length
    newMonster.controller = "player"

    if(playerTeam.length < 6) {
    playerTeam.push(newMonster)
    
    for(let i = 0; i < playerTeam.length; i++)
    {
        rosterDivs[i].style.backgroundImage = "url(" + playerTeam[i].icon + ")";
    }
    } else {
        
        console.log("Team full")
    }
}




function incrementScore(scoreSpan)
{
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
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



function CommenceFight(){

    activePlayerMonster = playerTeam[0]
    activeEnemyMonster = enemyTeam[0]
    for(let i = 0; i < 6; i++){
        if(playerTeam[i] != null)
            swapButtons[i].style.backgroundImage = "url(" + playerTeam[i].icon + ")"
    }
    playerMonsterPlaceholder.style.backgroundImage = "url(" + activePlayerMonster.sprite + ")"
    enemyMonsterPlaceholder.style.backgroundImage = "url(" + activeEnemyMonster.sprite + ")"
    UpdateHealth()

    

    PrintOutput(activePlayerMonster.name + " is fighting enemy " + activeEnemyMonster.name)
    PopulateMoveButtons()
}

function PrintOutput(message)
{
    output.innerHTML = message;
}

function UpdateHealth(){
    playerHealthBar.innerHTML = "HP: " + activePlayerMonster.health
    enemyHealthBar.innerHTML = "HP: " + activeEnemyMonster.health
}

function EnemyMove(){
    

    let i= Math.floor(Math.random() * 10)
    if(i < 8)
    {
        i = Math.floor(Math.random() * 3)
        activeEnemyMonster.moves[i]("enemy", activePlayerMonster, activeEnemyMonster)
    }else{
        swapButtons()
    }
}

function swap()