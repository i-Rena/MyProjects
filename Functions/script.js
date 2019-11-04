// 1
function isEven(num){
if(num % 2 === 0){
    return true ;
}
   else return false;
}


// 2
function factorial(num){
    var result = 1;
    for(var i=1 ; i<=num ; i++){
       result *= i;
    }
    return result;
}


//3
function kebabToSnake(kebab){
    var snake = kebab.replace("-","_");
    return snake;
}


//3.1
function kebabToSnake1(str){
    var kebab = str;
    var result = "";
    for(var i=0 ; i < kebab.length ; i++ ){
      
        if(kebab[i] === "-"){
            result += "_";
        }

        else result += kebab[i];
        
    }
    return result;
}
