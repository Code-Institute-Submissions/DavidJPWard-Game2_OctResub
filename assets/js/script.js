const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector("[data-computer-score]")
const yourScoreSpan = document.querySelector("[data-your-score]")
const teamPopupButton = document.querySelector(".select-team")
const teamPopup = document.querySelector(".team-select-popup")
const battlePopup = document.querySelector(".battle-popup")
const teamSelectionButtons = document.querySelectorAll('.team-selection')

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
let fired = false;


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
            moveList.Smash,
            moveList.Grind,
            moveList.Polyfilla,
            moveList.Spark
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
            moveList.Stare,
            moveList.Slap,
            moveList.Scratch,
            moveList.ContactLense
        ]
    },
    {
        name: "blady",
        position: null,
        health: 10,
        speed: 3,
        moves: [
            moveList.Slice,
            moveList.Sharpen,
            moveList.RunWithScissors,
            moveList.Scratch
        ]
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

/*button thats starts fight if number of team members is greater than 1*/

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
            console.log("button text added")

            if(i < activePlayerMonster.moves.length){

                let j = moveButtons.dataset.slot
                console.log("move button data slot: " + j.toString())

                moveButtons.addEventListener('click', e => {
                    fired = true;
                    console.log("fired is true")
                    console.log("move button data set after event handler: " + moveButtons.dataset.slot.toString())
                    
                    console.log(activePlayerMonster.name + "s move: " + activePlayerMonster.moves[moveButtons.dataset.slot])
                    console.log("arguement to be passed: " + activePlayerMonster.moves[moveButtons.dataset.slot]("player", activePlayerMonster, activeEnemyMonster))
                    TurnCycle(activePlayerMonster.moves[moveButtons.dataset.slot])
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
    console.log("health updated")
}

function EnemyMove(){
    let i= Math.floor(Math.random() * 10)
    if(i < 8)
    {
        i = Math.floor(Math.random() * 3)
        console.log("enemy move slot used: " + i.toString())
        console.log("corrosponding move in that slot" + activeEnemyMonster.moves[i])
        activeEnemyMonster.moves[i]("enemy", activePlayerMonster, activeEnemyMonster)
    }else{
        console.log("swapButtons()")
    }
}

function CalculateSpeed(){
    let fasterMonster = null;

    console.log("enemys speed value: " +activeEnemyMonster.speed.toString())
    console.log("players speed value: " +activePlayerMonster.speed.toString())

    if(activePlayerMonster.speed > activeEnemyMonster.speed){
        fasterMonster = activePlayerMonster
        console.log("player faster")
    }else if(activePlayerMonster.speed == activeEnemyMonster.speed){
        console.log("same speed: ")
        if(Math.floor(Math.random() * 2) == 1){
            fasterMonster = activePlayerMonster
            console.log("player won coin flip")
        }else{
            fasterMonster = activeEnemyMonster
            console.log("enemy won coin flip")
        }
        
    }else{
        fasterMonster = activeEnemyMonster
        console.log("enemy faster")
    }

    console.log(fasterMonster.name + " to move first")

    PrintOutput(fasterMonster.controller + " " + fasterMonster.name + " went first")
    return fasterMonster
}

function swap(){}

function TurnCycle(action){
    if(activePlayerMonster == CalculateSpeed()){
        console.log(fired)
        console.log("player will use: " + action)

        action(activePlayerMonster, activeEnemyMonster)
        console.log("player move completed")
        UpdateHealth()
        if(activeEnemyMonster.health>0){
            EnemyMove()
        }
    }
    else{
        console.log("enemy moved")
        console.log(action)
        EnemyMove()
        UpdateHealth()
        if(activePlayerMonster.health>0){
            console.log(fired)
            console.log("player will use: " + action)

            action(activePlayerMonster, activeEnemyMonster)
            console.log("player move completed")
        }
    }

}