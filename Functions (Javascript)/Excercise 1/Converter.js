function converter(temperature, type){
var result;

if(type === "C"){
result = temperature * 1.8 + 32;
}
 else if (type === "F"){
result = 5 /9 * (temperature - 32);
}
else {
    result = "the value cant be converted"
}
console.log("we are done");
return result;
}