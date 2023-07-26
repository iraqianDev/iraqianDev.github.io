// Set up the canvas
const canvas = document.getElementById("matrix-canvas")
const ctx = canvas.getContext("2d")

// Set up the character to use in the rain
const character = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
  "タ",
  "チ",
  "ツ",
  "テ",
  "ト",
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ",
  "ハ",
  "ヒ",
  "フ",
  "ヘ",
  "ホ",
  "マ",
  "ミ",
  "ム",
  "メ",
  "モ",
  "ヤ",
  "ユ",
  "ヨ",
  "ラ",
  "リ",
  "ル",
  "レ",
  "ロ",
  "ワ",
  "ヲ",
  "ン",
]

// Set up the matrix rain object
const matrixRain = {
  columns: null,
  drops: [],
  dropSpeed: 50,
  textColor: "#0F0",
  bgColor: "rgba(0, 0, 0, 0.05)",
  fontSize: 15,
  initialize: function () {
    // Set up the number of columns based on the canvas width and font size
    this.columns = Math.floor(canvas.width / this.fontSize)

    // Create an empty array of drops
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = 1
    }
  },
  draw: function () {
    // Set the background color to create the trailing effect
    ctx.fillStyle = this.bgColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Set the text color and font
    ctx.fillStyle = this.textColor
    ctx.font = this.fontSize + "px monospace"

    // Loop through each column and drop
    for (let i = 0; i < this.columns; i++) {
      let x = i * this.fontSize
      let y = this.drops[i] * this.fontSize

      // Choose a random character and draw it at the x,y position
      let char = character[Math.floor(Math.random() * character.length)]
      ctx.fillText(char, x, y)

      // Move the drop down by the drop speed and reset it to the top if it goes off the screen
      if (y > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0
      }
      this.drops[i]++
    }
  },
}

// Set up the animation loop
function animate() {
  requestAnimationFrame(animate)
  matrixRain.draw()
}

// Initialize the matrix rain and start the animation loop
matrixRain.initialize()
animate()

// text effect

const textElement = document.getElementById("hackerText")
const originalText = textElement.innerText
let timeoutId

function scrambleText() {
  let scrambledText = ""

  for (let i = 0; i < originalText.length; i++) {
    if (Math.random() < 0.5) {
      scrambledText += String.fromCharCode(Math.random() * 94 + 33)
    } else {
      scrambledText += originalText[i]
    }
  }

  scrambledText = scrambledText.substring(0, originalText.length)

  textElement.innerText = scrambledText
}

function resetText() {
  clearTimeout(timeoutId)
  textElement.innerText = originalText
  clearInterval(start)
}

const start = setInterval(scrambleText, 100)

timeoutId = setTimeout(resetText, 2000)



// timer start

let selectedDate = new Date("2023/7/16").getTime()



let counter = setInterval(() => {
    let dateNow = new Date().getTime()
    let dateDiff = selectedDate - dateNow

    let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24) 
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60)
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000 / 60)
    let seconds = Math.floor((dateDiff % (1000 * 60 )) / 1000 )
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}`: days 
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`: hours 
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes 
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds 


    if(dateDiff <= 0){
        clearInterval(counter)
    }
}
, 1000)
