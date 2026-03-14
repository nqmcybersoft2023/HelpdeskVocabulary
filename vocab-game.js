
const vocabulary = [

{en:"router",vi:"bộ định tuyến"},
{en:"modem",vi:"modem"},
{en:"network",vi:"mạng"},
{en:"server",vi:"máy chủ"},
{en:"ticket",vi:"phiếu hỗ trợ"},
{en:"troubleshoot",vi:"xử lý sự cố"},
{en:"restart",vi:"khởi động lại"},
{en:"password",vi:"mật khẩu"},
{en:"connection",vi:"kết nối"},
{en:"update",vi:"cập nhật"},
{en:"device",vi:"thiết bị"},
{en:"install",vi:"cài đặt"},
{en:"remote access",vi:"truy cập từ xa"},
{en:"error",vi:"lỗi"},
{en:"support",vi:"hỗ trợ"},
{en:"printer",vi:"máy in"},
{en:"scanner",vi:"máy quét"},
{en:"wifi",vi:"wifi"},
{en:"ethernet",vi:"mạng dây"},
{en:"login",vi:"đăng nhập"}

]

const PAIRS_PER_LESSON = 10

let lesson = 0
let score = 0
let matched = 0

let selectedCard = null


function shuffle(arr){

return arr.sort(()=>Math.random()-0.5)

}


function loadLesson(){

matched = 0

let start = lesson * PAIRS_PER_LESSON
let words = vocabulary.slice(start,start+PAIRS_PER_LESSON)

renderBoard(words)

document.getElementById("lesson").innerText = lesson+1

}


function renderBoard(words){

let viColumn = document.getElementById("viColumn")
let enColumn = document.getElementById("enColumn")

viColumn.innerHTML=""
enColumn.innerHTML=""

let viList = shuffle([...words])
let enList = shuffle([...words])

viList.forEach(v=>{

let card=document.createElement("div")

card.className="card"
card.innerText=v.vi
card.dataset.match=v.en
card.dataset.lang="vi"

viColumn.appendChild(card)

})

enList.forEach(v=>{

let card=document.createElement("div")

card.className="card"
card.innerText=v.en
card.dataset.match=v.vi
card.dataset.lang="en"

enColumn.appendChild(card)

})

addEvents()

}


function addEvents(){

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

if(card.classList.contains("correct")) return

speak(card.innerText)

if(!selectedCard){

selectedCard = card
card.classList.add("selected")
return

}

if(selectedCard === card) return


if(selectedCard.dataset.match === card.innerText){

correctPair(selectedCard,card)

}else{

wrongPair(selectedCard,card)

}

selectedCard=null

})

})

}


function correctPair(card1,card2){

card1.classList.add("correct")
card2.classList.add("correct")

score += 10
matched++

updateScore()

setTimeout(()=>{

card1.style.visibility="hidden"
card2.style.visibility="hidden"

checkLessonComplete()

},600)

}


function wrongPair(card1,card2){

card1.classList.add("wrong")
card2.classList.add("wrong")

score -= 2

updateScore()

setTimeout(()=>{

card1.classList.remove("wrong","selected")
card2.classList.remove("wrong","selected")

},600)

}


function updateScore(){

document.getElementById("score").innerText = score

}


function checkLessonComplete(){

if(matched === PAIRS_PER_LESSON){

setTimeout(()=>{

lesson++

if(lesson * PAIRS_PER_LESSON >= vocabulary.length){

alert("🎉 Bạn đã hoàn thành toàn bộ từ vựng!")

}else{

loadLesson()

}

},800)

}

}


function speak(word){

let speech = new SpeechSynthesisUtterance()

speech.text = word
speech.lang = "en-US"

speechSynthesis.speak(speech)

}


window.onload=()=>{

loadLesson()

}

