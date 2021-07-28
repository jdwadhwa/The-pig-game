var scores,roundscore,activeplayer,dice,gameplaying,prev;

init();







document.querySelector(".btn-roll").addEventListener("click",function(){

    if(gameplaying){
        dice=Math.floor(Math.random()*6+1);
        if(prev===6&&dice===6)
        {
            scores[activeplayer]=0;
            document.querySelector("#score-"+activeplayer).innerHTMl=0;
            nextplayer();
        }
        prev=dice;


document.querySelector("#current-"+activeplayer).innerHTML=dice;

document.querySelector(".dice").src="dice-"+dice+".png";
document.querySelector(".dice").style.display="block";

if(dice!=1)
{
    roundscore+=dice;
    document.querySelector("#current-"+activeplayer).innerHTML=roundscore;


}
else{
   
   nextplayer();

    }

}

})

document.querySelector(".btn-hold").addEventListener("click",function(){

    if(gameplaying){

        scores[activeplayer]+=roundscore
document.querySelector("#score-"+activeplayer).innerHTML=  scores[activeplayer];

if(scores[activeplayer]>=document.querySelector("#score").value)
{document.querySelector("#name-"+activeplayer).innerHTML="winner";

document.querySelector(".dice").style.display="none";

document.querySelector(".player-"+activeplayer+"-panel").classList.remove("active");

document.querySelector(".player-"+activeplayer+"-panel").classList.add("winner");
gameplaying=false;




}
else{
    
nextplayer();

    }

    

}




})

function nextplayer(){
    document.querySelector("#current-0").innerHTML=0;
    document.querySelector("#current-1").innerHTML=0;
    roundscore=0;
    


    activeplayer==0?activeplayer=1:activeplayer=0;
    
    
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display="none";

}


document.querySelector(".btn-new").addEventListener("click",init);


function init()
{
    scores=[0,0];

    roundscore=0;
    
    activeplayer=0;

    document.querySelector(".dice").style.display="none";

document.querySelector("#score-0").innerHTML="0";
document.querySelector("#score-1").innerHTML="0";
document.querySelector("#current-0").innerHTML="0";
document.querySelector("#current-1").innerHTML="0";

document.querySelector("#name-0").innerHTML="Player 1";
document.querySelector("#name-1").innerHTML="Player 2";
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector(".player-0-panel").classList.add("active");

gameplaying=true;








}