function mainAction() {
    var redWedding = new War();
    var battleEnd = false;
    var counter = 0;
   
    while (!battleEnd) {
        counter++;
        battleEnd = redWedding.isRaging();  //Ja povikuvame Is raging funkcijata( se naogja vo war)
    }

    console.log("The battle ended after " + counter + " days");

}

mainAction(); //Ja povikuvame main Action funkcijata 