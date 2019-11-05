var numOfSquares = 9;
var colors = generateRandomColors(numOfSquares); //pravime niza so boi
var squares = document.querySelectorAll(".square"); //vo squares promenliva gi smestuvame kvadratite 
var pickedColor = pickColor();  
var colorDisplay = document.getElementById("colorDisplay"); //vo colorDisplay promenliva go smestuvame spanot so id ime colorDisplay
var messageDisplay = document.querySelector("#message");  //vo messageDisplay smestuvame prazen span so id messsage
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var mediumButton = document.querySelector("#mediumBtn");
var hardButton = document.querySelector("#hardBtn");
var musicButton = document.querySelector("#musicBtn");
var music = document.querySelector("#music");



easyButton.addEventListener("click",function(){
    mediumButton.classList.remove("selected");
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }

});


mediumButton.addEventListener("click",function(){
    mediumButton.classList.add("selected");
    easyButton.classList.remove("selected");
    hardButton.classList.remove("selected");
    
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
        
    }

    
});


hardButton.addEventListener("click",function(){
    hardButton.classList.add("selected");
    mediumButton.classList.remove("selected");
    easyButton.classList.remove("selected");
    

    numOfSquares = 9;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
        
    }


});

musicButton.addEventListener("click",function(){
    music.muted = !music.muted;
});


colorDisplay.textContent = pickedColor; //tekstualnata sodrzhina na spanot ja menuvame so imeto na odbranata boja


resetButton.addEventListener("click",function(){
colors = generateRandomColors(numOfSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
this.textContent = "New Colors";
messageDisplay.textContent = "";
for(var i = 0 ; i<squares.length ; i++){
    squares[i].style.background = colors[i];
}

h1.style.background = "steelblue";
});


// For-ot se dvizhi od 0 pozicija do pozicija koja oznacuva kolku e dolga nizata
for(var i=0 ; i<squares.length ; i++){
    
    squares[i].style.background = colors[i]; //sekoj kvadrat koj doagja vo forot dobiva soodvetna boja od nizata (6 kvadrati gi dobivaat 6te razlicni zadadeni boi)

    //Kreirame event za kvadratot koj se aktivira na klik i ja izvrsuva funkcijata 
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.background;  //Vo promenliva clickedColor ja zacuvuvame kliknatata boja , this se odnesuva na momentalniot kvadrat
        
        //Ovde proveruvame dali kliknatata boja se sovpagja so odranata boja
        
        if(clickedColor === pickedColor){
            //Ako se sovpagja zadavame spanot da ima sodrzina Correct
            messageDisplay.textContent = "Correct!";  //prazniot span sega ima textContent Correct
            resetButton.textContent = "Play again?";  //reset kopceto sega stanuva od New Game vo Play again?
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        
        }
        else{
           messageDisplay.textContent = "Try again!";  //Vo sekoj drug slucaj se ispishuva ova
           this.style.background = "#232323"; //Koga gresime kvadrat sakame da iscezne odnosno da se pretopi vo bojata na pozadinata
        }
    
    });
}


//Ovde e definirana funkcijata koja shto gi menuva boite na kvadratite vo taa koja ke ja predademe(a toa e tocnata)
function changeColors(color){
    for(var i=0 ; i<squares.length ; i++){
        squares[i].style.background = color;    //For-ot vrte za site kvadrati i nivnite boi gi menuva vo taa shto ja predavame
    }
}


//Definirana e funkcija koja odbira random koja BOJA ke e za pickedColor(od veke dadenite 6) !!! odnosno koja da bide pocetnata(baranata boja)
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);   //Vo random zacuvuvame broj koj sto e random generiran pomegjy 0 i 5.99 no potoa so floor e pretvoren vo cel broj
    return colors[random];  //Toj random broj go koristeme za da pristapime do nekoj od clenovi od nizata [0,1,2,3,4,5]
}

function generateRandomColors(num){
    var arr = [];
    
    for(var i = 0 ; i < num ; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g +", " + b +")";

}
