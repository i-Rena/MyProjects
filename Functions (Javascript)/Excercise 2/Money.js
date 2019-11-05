console.log("how much money y have");
function money(money){
  
   var money = prompt(money);
   if(money  > 1000)
   {
    console.log("y are rich");
   }
   else if(money > 500)
   {
    console.log("y are medium");
   }
   else{
    console.log("y are poor");

   }
   return 0;
}
