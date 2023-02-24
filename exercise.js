class Vehicle {
   constructor(a, b, c) {
      this.make = a;
      this.model = b;
      this.year = c;
   }
   honk() {
      return 'Beep.';
   }
   toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
   }
}

class Car extends Vehicle {
   constructor(a, b, c) {
      super(a, b, c);
      this.numWheels = 4;
   }
}

class Motorcycle extends Vehicle {
   constructor(a, b, c) {
      super(a, b, c);
      this.numWheels = 2;
   }
   revEngine() {
      return 'VROOOOM!';
   }
}

class Garage {
   constructor(a) {
      this.vehicles = [];
      this.capacity = a;
   }
   add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
         return 'Only New Vehicles Allowed';
      }
      if (this.vehicles.length >= this.capacity) {
         return 'We Are Full!';
      }
      this.vehicles.push(newVehicle);
      return 'Added Your Vehicle';
   }
}
