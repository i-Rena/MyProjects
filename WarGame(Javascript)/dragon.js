function Dragon(name) {
    this.name = name;
    this.health = 15000;
    this.minDamage = 500;
    this.maxDamage = 750;
    this.type = "dragon";
}

Dragon.prototype = new Combatant();