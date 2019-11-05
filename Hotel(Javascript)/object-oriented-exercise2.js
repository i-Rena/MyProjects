
function getRandomNumber(min, max) {
 return Math.floor(Math.random() * (max - min + 1) + min);
}

function Hotel(name, stars) {
 this.name = name;
 this.stars = stars;
 this.rooms = [];
 this.employees = [];
 this.budget = 0;

 this.populateRooms = function() {
   var numberOfRooms = getRandomNumber(20, 60);
   for (var i = 0; i < numberOfRooms; i++) {
     var room = new Room(100 + i);
     this.rooms.push(room);
   }
 };

 this.spendDay = function() {
   this.guestLeave();
   this.guestsArrive();
 };

 this.guestsArrive = function() {
   var numberOfGuests = getRandomNumber(3, 5);
   for (var i = 0; i < numberOfGuests; i++) {
     var room = this.getFirstFreeRoom();
     if (room !== undefined) {
       room.setTaken(true);
     }
   }
 };

 this.guestLeave = function() {
   var numberOfGuests = getRandomNumber(1, 3);
   for (var i = 0; i < numberOfGuests; i++) {
     
     var room = this.getFirstTakenRoom();
     if (room !== undefined) {
       room.setTaken(false);
       this.budget += getRandomNumber(100,500);  
     }

   }
 };
 

 this.getFirstFreeRoom = function() {
   for (var i = 0; i < this.rooms.length; i++) {
     if (!this.rooms[i].getTaken()) {
       return this.rooms[i];
     }
   }
   console.log("No rooms available");
 };

 this.getFirstTakenRoom = function() {
   for (var i = 0; i < this.rooms.length; i++) {
     if (this.rooms[i].getTaken()) {
       return this.rooms[i];
     }
   }
   console.log("All rooms are available");
 };

 this.recruitNewEmployees = function() {
   var numberOfNewEmployees = getRandomNumber(1, 3);
   for (var i = 0; i < numberOfNewEmployees; i++) {
     var employee = new Employee("Employee: " + this.employees.length);
     this.employees.push(employee);
   }
 };
}

function Room(number) {
 this.number = number;
 this.taken = false;
 this.clean = true;

 this.getTaken = function() {
   return this.taken;
 };

 this.setTaken = function(takenValue) {
   this.taken = takenValue;
 };
}

function Employee(name) {
 this.name = name;
}

function main() {
 var hotel = new Hotel("Palace", 5);
 hotel.populateRooms();
 console.log(hotel);

 for (var i = 1; i <= 30; i++) {
   console.log("Day: " + i);
   hotel.spendDay();
   if (i % 3 == 0) {
     hotel.recruitNewEmployees();
   }
 }

 console.log(hotel);
}

main();