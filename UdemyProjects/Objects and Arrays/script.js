// Array with three objects 

var movieDB = [
    
    movie1 =  {
        title : "Avengers",
        rating : 5,
        hasWatched : true,
    }
    ,
    movie2 = {
        title : "X-Men",
        rating : 4,
        hasWatched : false,
    }
    ,
    movie3 = {
        title : "Guardians of the Galaxy",
        rating : 3,
        hasWatched : true,
    }
];


//For loop for printing the informations about the objects(movies)

for (var i = 0; i < movieDB.length; i++) {
    if(movieDB[i].hasWatched === true){
        console.log("I have watched " + movieDB[i].title + " and the rating is " + movieDB[i].rating);
    }
    else console.log("I have not watched " + movieDB[i].title + " but I know that the rating is " + movieDB[i].rating);
}

