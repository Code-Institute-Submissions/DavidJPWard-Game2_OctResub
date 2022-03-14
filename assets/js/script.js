const selectionButtons = document.querySelectorAll('[data-selection]')
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


selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        const selectionName = selectionButtons.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection
}

function isWinner

function randomSelection(){
    const randomInt = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomInt]
}
