function War() {

    this.boss = new Dragon("Drogon");  //Praeme objekt od tipot dragon i predavame name = "Drogon"
    this.army = [];  // Kreirame niza od beskonecno clenovi


//--------------------------FUNKCIJA ZA GENERIRANJE ARMIJA--------------------------------------------------------------------------------


    this.generateArmy = function () { // Ja polnime nizata praznata niza army koja ja definiravme so 10 vojnici od razlicen tip(random)(pr. 4 knights, 3 wizards , 3 archers)

        for (var index = 0; index < 10; index++) {

            var combatant = getRandom(1, 3);

            switch (combatant) {
                case 1:
                    this.army.push(new Knight("Knight " + index));
                    break;
                case 2:
                    this.army.push(new Wizard("Wizard " + index));
                    break;
                case 3:
                    this.army.push(new Archer("Archer " + index));
                    break;
                default:
                    break;
            }
        }
    }

    this.generateArmy(); //Ja povikuvame generate army.



//-----------------------------------GLAVNA FUNKCIJA----------------------------------------------------------------------------------------

    this.isRaging = function () {  //Funkcija - Kade ja povikuvame? - vo main 

        var aliveCombatants = 0;
        for (var index = 0; index < this.army.length; index++) {
            if (this.army[index].isAlive) {
                aliveCombatants++;
            }
        }


        this.processTurn(aliveCombatants); //Ja povikuvame process Turn funkcijata (se naogja tuka)( prviot pat so 10)



        if (!this.boss.isAlive || !aliveCombatants) { //Ako dragonot ne e ziv ili vojnicite ne se zivi :     (se izvrsuva na kraj)
            
            if (!aliveCombatants) { //Ako ne se zivi vojnicite isprintaj na ekran deka Dragonot gi ubil site i isprintaj ja silata koja mu ostanala.
                console.log(this.boss.name + " has killed all the peasants. His health is " + this.boss.health);
            }
            
            else { // Ako dragonot ne e ziv isprintaj deka e ubien od vojnicite.
                console.log("The dragon has perished at the hands of the peasants");
            }

            return true; // zosto ima potreba od return true ?  na Is raging li se odnesuva?
        }
    }

//--------------------------------------------FUNKCIJA ZA EDEN TURN -------------------------------------------------------------------------------------------------    


    this.processTurn = function (aliveCombatants) {

        if (!aliveCombatants) {
            return true;
        }

        var victim = this.army[getRandom(0, this.army.length - 1)]; //Dodeluva random vojnik od nizata koj ke e zrtva

        
        // Ja vrti vekje popolnetata niza so vojnici i go bara prviot Knight bidejli toj ima isShielding i go stava nego kako prva zrtva.

        for (var j = 0; j < this.army.length; j++) {
            // console.log(this.army[j]);
            if (this.army[j].isShielding) {
                victim = this.army[j];
            }
        }


        // Napad od dragonot kon vojnikot

        if (victim.isAlive) { // ako vojnikot is Alive

            if (victim.isShielding) { // Ako victim is Shielding 
                this.boss.attack(victim, 0); // Ja povikuvame funkcija attack (se naogja vo kombatant) so parametri victim i 0 damage
            }

            else {  //Ako victim ne pravi Is shielding
                this.boss.attack(victim, getRandom(this.boss.minDamage, this.boss.maxDamage));  // Ja povikuvame funkcija attack (se naogja vo kombatant) so parametri
                //maksimalna i minimalna damage na dragonot 
            }

        

        }

        else { // Ako victim ne e is Alive togas neka zapocne nov turn 
            return this.processTurn(); //rekurzija na proces Turn 
        }



        // So ova sekoj clen od vojskata go napagja dragonot ( this.boss) so radnom damage (presmetana so fukcijata getRandom, i toa sekoas so max i min na clenot od armijata)
        for (var index = 0; index < this.army.length; index++) {
            if (this.boss.isAlive && this.army[index].isAlive) {
                this.army[index].attack(this.boss, getRandom(this.army[index].minDamage, this.army[index].maxDamage));
            }
        }
    }




}//kraj na "klasa" war