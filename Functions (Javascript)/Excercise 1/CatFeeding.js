
function catFeeding() {
    var cats = ["Tabby", "Lizzie", "Mary"];


    for (var i = 0; i < 7; i++) {



        for (var j = 0; j < cats.length; j++) {
            if (cats[j] === "Tabby") {
                console.log(cats[j] + "tarted eating fish");
            }
            else if (cats[j] === "Lizzie") {
                console.log(cats[j] + "tarted eating chiken");
            }
            else if (cats[j] === "Mary") {
                console.log(cats[j] + "tarted eating whatever");
            }


        }
    }
}
catFeeding();
