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
