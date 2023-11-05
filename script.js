
let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false

let message_h = document.querySelector("#message")
let sum_h=document.querySelector("#sum")
let card_h=document.querySelector("#card")
let player_h=document.querySelector("#chips")

let player={
  name:"YourName",
  chips:145
}
update()
function update(){
  player_h.textContent=player.name+" : $"+player.chips
}


function start(){
  if(isAlive===false){
    while(cards.length >0)
      cards.pop()
    message_h.textContent="Do you want to draw a new card?"
    sum=0;
    player.chips-=30
    update()
    isAlive=true
    cards.push(drawNewCard())
    sum+=cards[cards.length -1]
    cards.push(drawNewCard())
    sum+=cards[cards.length -1]
    RenderGame()
  }
}
function drawNewCard(){
  let a=Math.floor(Math.random()*13)+1
  if(a==1)
    return 11
  return a;
}
function RenderGame() {
  card_h.textContent="Cards:"
  for(let i=0;i<cards.length;i++)
    card_h.textContent+=" "+cards[i] 
  sum_h.textContent="SUM :"+sum;
  if (sum <= 20) {
    message_h.textContent="Do you want to draw a new card?"
  } else if (sum === 21) {
    message_h.textContent="You've got Blackjack!"
    hasBlackJack = true
    isAlive =false
  } else {
    message_h.textContent="You're out of the game! "
    isAlive = false
  }
}
function new_card(){
  if(isAlive ){
    cards.push(drawNewCard())
    sum+=cards[cards.length -1]
    RenderGame()
  }
}
function cash_out(){
  if(hasBlackJack==true){
    hasBlackJack=false;
    player.chips=player.chips+sum*10
    update()
  }
}