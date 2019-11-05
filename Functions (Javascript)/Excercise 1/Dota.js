
var orc_hitpoints = 300;
var orc_damage;
var orc_armor = 5;
var human_hitpoints = 300;
var human_damage;
var human_shield = 5;
var orc_max = 35;
var orc_min = 23;
var human_max = 35;
var human_min = 23;


function dota(){

while((human_hitpoints > 0 ) || (orc_hitpoints > 0)){

   orc_damage = Math.floor(Math.random()* orc_max) + orc_min;
   human_damage = Math.floor(Math.random() * human_max) + human_min;

   fight();

   if(human_hitpoints <= 0){
       console.log("The orc wins!!!");
       break;
   }

   else if(orc_hitpoints <= 0){
       console.log("The human wins!!!");
       break;
   }

}

}

function fight(){
   orc_hitpoints = orc_hitpoints + orc_armor - human_damage;
   human_hitpoints = human_hitpoints + human_shield - orc_damage;
}

dota();