function CPR(){
    var seconds = 60;
    for(var i=0; i<seconds; i++){
        
        console.log("performing insertAction");
       
        if(i%15 === 0){
            console.log("Alive");
        }        

        if(i === seconds-1){
            console.log("deadthhhhh");
        }

    }
}