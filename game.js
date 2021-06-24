class Game {

constructor(){


}

Read(){

database.ref("gameState").on("value",(data)=>{
gameState = data.val()

})

}

}