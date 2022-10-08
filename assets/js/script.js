
/*elements*/

const teamCreationPopup = document.querySelector(".team-select-popup")
const battlePopup = document.querySelector(".battle-popup")
const instructionsPopup = document.querySelector(".instructions-popup")
const teamSelectionButtons = document.querySelectorAll('.team-selection')
const removeButton = document.querySelector("#remove")
const rosterDivs = document.querySelectorAll(".team-roster-position")
const mainPageRosterDivs = document.querySelectorAll(".team-roster-position-main-page")
const playerMonsterPlaceholder = document.querySelector(".player-placeholder")
const enemyMonsterPlaceholder = document.querySelector(".enemy-placeholder")
const playerHealthBar = document.querySelector(".player-health-bar")
const enemyHealthBar = document.querySelector(".enemy-health-bar")
const firstOutput = document.querySelector(".first-output")
const secondOutput = document.querySelector(".second-output")
const winnerBanner = document.querySelector(".winner-declaration")
const playerScore = document.querySelector("#player-score")
const enemyScore = document.querySelector("#enemy-score")

/*buttons*/

const closeButton = document.querySelectorAll(".close-button")
const swapButtons = document.querySelectorAll(".swap-button")
let moveButtons = document.querySelectorAll(".move-button")
const battlePopupButton = document.querySelector(".start-fight")
const teamCreationPopupButton = document.querySelector(".select-team")
const instructionPopupButton = document.querySelector(".instructions")

/*variables*/
let wins = 0;
let losses = 0
let playerTeam = [];
let playerTeamStore = [];
let enemyTeam = [];
let newMonster = null;
let activePlayerMonster = null;
let activeEnemyMonster = null;
const moveList = new MonsterDeck();

//let isFaster = false;

/*list of monsters*/

const TEAM_SELECTIONS = [
    {
        name: "bruk",
        sprite: "assets/images/bruk-sprite.png",
        icon: "assets/images/bruk-icon.png",
        controller: null,
        position: null,
        speed: 1,
        attack: 2,
        defence: 4,
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
        sprite: "assets/images/blinky-sprite.png",
        icon: "assets/images/blinky-icon.png",
        controller: null,
        position: null,
        attack: 6,
        defence: 1,
        speed: 4,
        health: 8,

        moves: [
            moveList.Stare,
            moveList.Slap,
            moveList.Scratch,
            moveList.ContactLense
        ]
    },
    {
        name: "blady",
        sprite: "assets/images/blady-sprite.png",
        icon: "assets/images/blady-icon.png",
        controller: null,
        position: null,
        attack: 4,
        defence: 3,
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

/*--------EVENT LISTENERS--------*/

/*button that opens the team creation popup*/

teamCreationPopupButton.addEventListener("click", e =>{
        showPopup(teamCreationPopup)
})

/*button that opens the instructions popup*/

instructionPopupButton.addEventListener('click', e => {
    showPopup(instructionsPopup)
})

/*button given to both popups to close them*/

closeButton.forEach(closeButton => {
    closeButton.addEventListener("click", e => {
        closePopup(closeButton)
    })
})


/* buttons that allows you to pick team members in the team creation popup*/

teamSelectionButtons.forEach(teamSelectionButtons => {
    teamSelectionButtons.addEventListener('click', e => {
        selectTeamMember(teamSelectionButtons)

    })
})

/* button to remove a member from your team in the team creation popup*/

removeButton.addEventListener("click", e => {

    if(playerTeamStore.length >= 1) {
        let i = playerTeamStore.length - 1
        rosterDivs[i].style.backgroundImage = "url(/assets/images/empty-icon.png";
        mainPageRosterDivs[i].style.backgroundImage = "url(/assets/images/empty-icon.png"
        playerTeamStore.pop()
    } else {
        console.log("Team empty")
    }
})

/*button thats starts fight if number of team members is greater than 1*/

battlePopupButton.addEventListener('click', e => { 
    if(playerTeamStore.length > 0){
        playerTeam = [];
        setup()
        showPopup(battlePopup)
    }else{
        alert("you need someone on your team")
    }

})

/*buttons for your bench, allowing you to swap out monsters during battle*/

swapButtons.forEach(swapButtons => {
    swapButtons.addEventListener('click', e => {
        console.log(swapButtons.dataset.chair.toString())
        swap(swapButtons.dataset.chair, "player")

    })
})

/*populates the move buttons of the scene with the active player monsters moves
then adds an event handler to pass that action to the turnCycle() allowing the 
layer to perform actions*/

function PopulateMoveButtons(){
    if(activePlayerMonster != null || activeEnemyMonster != null){
        console.log("yes1")
        if(activePlayerMonster.health > 1 || activeEnemyMonster.health > 1){
            console.log("yes2")
            let i = 0
            moveButtons.forEach(moveButtons => {
                moveButtons.innerHTML = activePlayerMonster.moves[i].name
                if(i < activePlayerMonster.moves.length){
                    moveButtons.addEventListener('click', e => {
                        console.log(activePlayerMonster.moves[moveButtons.dataset.slot])
                        TurnCycle(activePlayerMonster.moves[moveButtons.dataset.slot])
                    })
                }
                i++
            })
        }
    }
}



/*depopulates the moveButtons as to not have duplicate handlers for each button*/

function depopulateMoveButtons(){
    moveButtons.forEach(moveButton => {
        moveButton.replaceWith(moveButton.cloneNode(true))
        moveButtons.innerHTML = " "
    })
    moveButtons = document.querySelectorAll(".move-button")
}

/*upon selection of a monster in the team creation popup, this function checks if 
there is space avialable on the team and then adds that monsterto the team */
function selectTeamMember(element){
    newMonster = new Monster(TEAM_SELECTIONS.find(monster => monster.name === element.dataset.monster))
    newMonster.position = playerTeamStore.length
    newMonster.controller = "player"

    if(playerTeamStore.length < 6) {
    playerTeamStore.push(newMonster)
    
    for(let i = 0; i < playerTeamStore.length; i++)
    {
        rosterDivs[i].style.backgroundImage = "url(" + playerTeamStore[i].icon + ")";
        mainPageRosterDivs[i].style.backgroundImage = "url(" + playerTeamStore[i].icon + ")";
    }
    } else {
        
        console.log("Team full")
    }
    console.log(playerTeam)
    console.log(playerTeamStore)
}



/*on the start of a battle this function checks the number of monsters in the player 
team and randomly selects the same amount of monsters from the TEAM_SELECTIONS pool 
and creates an enemy team*/
function createEnemyTeam(){
    enemyTeam.length = 0
    for(let i = 0; i < playerTeam.length; i++){
        const randInt = Math.floor(Math.random() * TEAM_SELECTIONS.length)
        newMonster = new Monster(TEAM_SELECTIONS[randInt])
        newMonster.controller = "enemy"
        enemyTeam.push(newMonster)

        enemyTeam[i].position = i
    }

}


/*this function adds a show class to the various popups*/
function showPopup(element){
    if(element.classList.contains("show")){ 
        element.classList.remove("show")
    } else{!element.classList.contains("show")
        element.classList.add("show");
    }
}


/*this function removes the show class, rendering the popup invisible*/
function closePopup(button){
    if(button.parentNode.classList.contains("show")){
        button.parentNode.classList.remove("show")
    }
}


/*this function is called on the start of a battle, it sets:
    -the active monster for both teams
    -the sprite for thos monsters
    -the icons for your team on the bench
    -starting health for both monsters
    -the opening messgae in the output box
    -calls the populateButtons method*/
function setup(){
    //playerTeam = playerTeamStore.clone()
    playerTeam = playerTeamStore.map(a => {return {...a}})

    //playerTeamStore.slice(0,playerTeamStore.length)
    console.log("playerTeamStore" + playerTeamStore)
    console.log(playerTeamStore)
    console.log("playerTeam" + playerTeam)
    console.log(playerTeam)

    

    
    winnerBanner.innerHTML = ""
    createEnemyTeam()
    
    activePlayerMonster = playerTeam[0]
    activeEnemyMonster = enemyTeam[0]
    UpdateHealth()
    swapButtons.forEach(e => {
        e.style.opacity = 1
    })

    for(let i = 0; i < 6; i++){
        if(playerTeam[i] != null)
            swapButtons[i].style.backgroundImage = "url(" + playerTeam[i].icon + ")"
        else
            swapButtons[i].style.backgroundImage = "url(/assets/images/empty-icon.png"
    }
    playerMonsterPlaceholder.style.backgroundImage = "url(" + activePlayerMonster.sprite + ")"
    enemyMonsterPlaceholder.style.backgroundImage = "url(" + activeEnemyMonster.sprite + ")"
    UpdateHealth()
    PrintOutput(activePlayerMonster.name + " is fighting enemy " + activeEnemyMonster.name, true)

    depopulateMoveButtons()

    PopulateMoveButtons()
}


/*prints out a message to the sperate output boxes, one letter at a time, the faster monster
is passed in and printed out in the top box*/
async function PrintOutput(message, isFaster)
{
    console.log(message)
    wait = true
    let newString = ">"
    let messageToPrint = " "
    if(isFaster == true){
        for(let i = 0; i <= message.length; i++)
        {       
            messageToPrint = newString + message.charAt(i)
            newString = messageToPrint
            firstOutput.innerHTML = messageToPrint
            await delay(.001);
        }
    }else{
        for(let i = 0; i <= message.length; i++)
        {       
            messageToPrint = newString + message.charAt(i)
            newString = messageToPrint
            secondOutput.innerHTML = messageToPrint
            await delay(.01);
        }
    }
}



/*used by the PrintOutput() function to delay the printing of each chracter in the string*/
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}



/*updates the health display, called after every move is completed*/
function UpdateHealth(){
    playerHealthBar.innerHTML = "HP: " + activePlayerMonster.health
    enemyHealthBar.innerHTML = "HP: " + activeEnemyMonster.health
    console.log("health updated")
}

/*randomly selects a move from the enemys move pool, there is a also a small chance that the 
enemy monster will swap out*/
function EnemyMove(isFaster){
    let i= Math.floor(Math.random() * 30)
    if(i < 29)
    {
        i = Math.floor(Math.random() * 4)
        activeEnemyMonster.moves[i](activeEnemyMonster, activePlayerMonster, isFaster)
    }else{
        swap(0,"enemy")
    }
}


/*calculates which monster will go first depending both monsters speed stats*/
function CalculateSpeed(){
    let fasterMonster = null;

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

    //PrintOutput(fasterMonster.controller.toString() + " " + fasterMonster.name + " went first", "faster")
    return fasterMonster
}


/*handles the swap function for both player and enemy*/
function swap(chair, controller){
    if(controller == "player"){
        chair-- 
        if(playerTeam.length >= chair && activePlayerMonster != playerTeam[chair] && playerTeam[chair].health> 0){
            console.log("seat number: " + chair.toString())
            console.log("monster at that chair: " + playerTeam[chair].name)
            activePlayerMonster = playerTeam[chair]
            playerMonsterPlaceholder.style.backgroundImage = "url(" + activePlayerMonster.sprite + ")"
            UpdateHealth()
            PrintOutput("player swapped out to "+ activePlayerMonster.name)
            depopulateMoveButtons()
            PopulateMoveButtons()
            TurnCycle
        }
    }else if(controller = "enemy"){
        let anyOneLeftAlive = true
        let enemyFound = false
        console.log("test for alive enemy team members")
        for(let i = 0; i < enemyTeam.length; i++){
            console.log(i.toString())
            if(enemyTeam[i].health > 0)
            {
                anyOneLeftAlive = true
                break
            }
            else{
                anyOneLeftAlive = false
            }
        }

        if(anyOneLeftAlive == false)
        {
            winnerBanner.innerHTML="YOU WIN"
            wins++
            playerScore.innerHTML = "Wins: " + wins.toString()
        }
        else{
            do{
                let index = Math.floor(Math.random() * enemyTeam.length)
                if(enemyTeam[index].health > 0)
                    {
                        activeEnemyMonster = enemyTeam[index]
                        enemyFound = true
                    }
            }while(enemyFound == false)

            enemyMonsterPlaceholder.style.backgroundImage = "url(" + activeEnemyMonster.sprite + ")"
            UpdateHealth()
        }
        

    }
}



/*called whenever an player makes and action, it takes the chosen action, calculates the monsters
speed and then performs that action either first or second depending on how quick they are*/
async function TurnCycle(action){
    console.log("NEW TURN--------------------")
    //if player is faster

    if(activePlayerMonster == CalculateSpeed()){
        console.log("speed found")
        action(activePlayerMonster, activeEnemyMonster, true)
        UpdateHealth()
        console.log("faster player action made")
        //if enemy is not dead
        if(activeEnemyMonster.health > 0){
            EnemyMove(false)
            console.log("slower enemy action made")
            UpdateHealth()
            //if player is dead
            if(activePlayerMonster.health <= 0){
                console.log("faster player monster died")
                console.log(activePlayerMonster)
                fainted(activePlayerMonster)
                //depopulateMoveButtons()
                
            }
        //if enemy is dead
        }else{
            console.log("slower enemy monster died")
            console.log(activeEnemyMonster)
            fainted(activeEnemyMonster)
            await delay(1)
            swap(0,"enemy")
        }
        
    }else{

        //if player is slower
        if(activePlayerMonster.health > 0 && activeEnemyMonster.health > 0){
            EnemyMove(true)
            console.log("faster enemy action made")
            UpdateHealth()
        //if player is not dead
            if(activePlayerMonster.health > 0){
                action(activePlayerMonster, activeEnemyMonster, false)
                console.log("slower player action made")
                UpdateHealth()
                //if enemy is dead
                if(activeEnemyMonster.health <= 0){
                    console.log("faster enemy died")
                    console.log(activeEnemyMonster)
                    fainted(activeEnemyMonster)
                    await delay(1)
                    swap(0,"enemy")
            }
        // if player is dead
        }else{
            console.log("slower player died")
            console.log(activePlayerMonster)
            fainted(activePlayerMonster)
        }
    }
    }

}


/*handles whats happens when a monster has run out of health, a check is made when a player
monster has died, whether they have any more monsters, if no then they lose*/
function fainted(faintedMonster){
    depopulateMoveButtons()
    console.log(faintedMonster)
    PrintOutput(faintedMonster.controller + "s " + faintedMonster.name + " has fainted", false)
    if(faintedMonster.controller == "player")
    { 

        playerMonsterPlaceholder.style.backgroundImage = "url()"
        swapButtons[faintedMonster.position].style.opacity = 0.2
        UpdateHealth()
        let anyOneLeftAlive = true
        console.log("test for alive team member")
        for(let i = 0; i < playerTeam.length; i++){
            console.log(i.toString())
            if(playerTeam[i].health > 0)
            {
                anyOneLeftAlive = true
                console.log("available members")
                break
            }
            else{
                anyOneLeftAlive = false
            }
        }
        console.log("ahoy")
        if(anyOneLeftAlive == false)
        {
            winnerBanner.innerHTML = "YOU LOSE"
            losses++
            enemyScore.innerHTML = "Losses " + losses.toString()
        }

    }else if(faintedMonster.controller == "enemy"){

        enemyMonsterPlaceholder.style.backgroundImage = "url()"
        UpdateHealth()
    }
    PopulateMoveButtons();
}
