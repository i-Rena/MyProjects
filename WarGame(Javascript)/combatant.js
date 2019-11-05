function Combatant() {

    this.attack = function(target, damage) {
        console.log(this.name +  " has attacked " + target.name + " for " + damage + " damage")
        target.receiveDamage(damage); // Ja povikuvame recieve damage funkcijata.( se naogja tuka)
    }


    this.receiveDamage = function(damage) {

        this.health -= damage;
        this.checkLife(); //Ja povikuvame check life funkcijata (se naogja vo being)

        if(this.isAlive && this.type == "dragon" && this.health < 12500) {
            this.specialSkills = new DragonAbilities();
            console.log("The dragon has used fire breath!!");
        
        }

        if(this.isAlive && this.type == "knight" && damage > 0) {
            console.log(this.name + " is shielding");
            this.isShielding = true;
        } else {
            this.isShielding = false;
        }
    }
}

Combatant.prototype = new Being();