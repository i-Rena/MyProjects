
var numbers = [];
for (var i = 0; i < 10; i++) {
    numbers[i] = (Math.random() * 10) + 1; //Random broevite da bidat megju 1 i 10 
    console.log("The number is: ", numbers[i]); //Da ni bidat pregledni random broevite
}
var result = Math.max(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5], numbers[6], numbers[7], numbers[8], numbers[9]);
console.log("The biggest random generated number is: ", result);
