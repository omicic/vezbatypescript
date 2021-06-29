let startButton = document.querySelector('#startBtn')
let mainTextH3 = document.querySelector('#main-text')
let playerArea = document.querySelector('#player-area')
let comp1Area = document.querySelector('#comp1-area')
let comp2Area = document.querySelector('#comp2-area')
let comp3Area = document.querySelector('#comp3-area')
let mainText = ''
startButton.addEventListener('click', startTimer)
let wins = [];



function startTimer() {
    let startTime = 5
    
    this.innerHTML = startTime
    let loop = setInterval(() => {
        startTime--;
        this.innerHTML = startTime
        if (startTime === 0) {
            clearInterval(loop)
            this.style.display = "none"
            startGame();
        }
    }, 100)
}


function startGame() {

    setUpRandomText()
    player1StartTyping()
    comp1StartTyping()
    comp2StartTyping()
    comp3StartTyping()

}

function endGame(){
    window.stop()
    console.log(wins)
    mainTextH3.innerHTML = ''
    mainTextH3.innerHTML = "Winner is " + wins[0]
    
}



function setUpRandomText() {
    let rand = Math.floor(Math.random() * textForTyping.length)

    mainText = textForTyping[rand]
    mainTextH3.style.display = 'block'
    mainTextH3.innerHTML = mainText
}

function player1StartTyping() {
    playerArea.focus()
    playerArea.addEventListener('keyup', function (e) {
        if (e.code == "Enter") {
            if(playerArea.value.trim() === mainText){
                //console.log("Pogodak")
                wins.push("player1")
                endGame()            
            }else{
                console.log("Promasaj")
            }
        }
    })

}

function comp1StartTyping() {
    comp1Area.innerHTML = ''
    let mainTextArray = mainText.split("")
    loop("comp1",comp1Area,mainTextArray)    
}

function comp2StartTyping() {
    comp2Area.innerHTML = ''
    let mainTextArray = mainText.split("")
    loop("comp2", comp2Area,mainTextArray)   
}

function comp3StartTyping() {
    comp3Area.innerHTML = ''
    let mainTextArray = mainText.split("")
    loop("comp3", comp3Area, mainTextArray)   
}

function loop(comp, area, mainTextArray){
    var rand = Math.round(Math.random() * (100 - 400)) + 300;
    console.log(mainTextArray)
    setTimeout(function() {
        if (mainTextArray.length > 0) {
            area.value += mainTextArray.shift()
            loop(comp, area, mainTextArray)
        } else {
           wins.push(comp) 
           endGame() 
           
        }  
    }, rand);
}


