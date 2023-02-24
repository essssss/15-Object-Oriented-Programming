/* ********************************
 ***OBJECT ORIENTED PROGRAMMING*****
 ******************************** */

// Plain old JavaScript Object (POJO)
//
// let o1 = {};
// let o2 = new Object();       //same thing
//
// o1.name = "Whiskey";
// 01["name"] = "Whiskey";      //same thing

/*
const color = 'purple';
const obj = {};
obj.color = '#452185';
obj[color] = '#452185';
*/

// The variable when its INSIDE the brackets gets evaluated. Same with equations and the like.

// Object Methods
// (note the capital 'O')
/*
    Object.keys(obj);
        => Gives an array of keys
    Object.values(obj);
        => Gives an array of values
    Object.entries(obj);
        => Gives an array of the key-value pairs nested in another array 
        [["color","#452185"],["purple", "#452185"]]
            Useful for iterating over the pairs.
        */
// Properties that do not exist are "undefined"
// Object keys are "stringified"

// Can add functions inside an object

// const add = (x, y) => x + y;
// const mult = (x, y) => x * y;
// const square = (x) => x * x;
// const power = (x, y) => x ** y;

// // Math object is like an acual object.

// const myMath = { add, mult, square, power };
// try myMath.power(3,3)

//Do it all inline
// const myMath = {
//    add: function (x, y) {
//       return x + y;
//    },
//    mult: (x, y) => {
//       return x * y;
//    },
// };

// const myMath = {
//    add(x, y) {
//       return x + y;
//    },
//    square(x) {
//       return x * x;
//    },
// };

/*************************************************************************************/

// Mixing data and Functionality
//The keyword "this"

///*
function getHypotenuse(a, b) {
   return Math.sqrt(a ** 2 + b ** 2);
}
function getArea(a, b) {
   return (a * b) / 2;
}
//*/

// We can do the following:

/*
let side1 = 4;
let side2 = 3;
const side3 = getHypotenuse(side1, side2);
const area = getArea(side1, side2);
*/

// But when we do, we have to keep referencing sides and go looking for things n stuff.

//Using a Plain Old Javascript Object to do it.

/*
let triangle = {
   a: 3,
   b: 4,
   getArea: function () {
      return (this.a * this.b) / 2;
   },
   getHypotenuse: function () {
      return Math.sqrt(this.a ** 2 + this.b ** 2);
   },
};
*/

// "this" references to "this object";

const rightTriangle = {
   a: 9,
   b: 12,
   printThis: function () {
      console.log(this);
   },
   getArea: function () {
      return (this.a * this.b) / 2;
   },
   getHypotenuse: function () {
      return Math.sqrt(this.a ** 2 + this.b ** 2);
   },
};

// Keyword "this" behaves DIFFERENTLY in arrow functions.

/*************************************************************************************/

//Constructor functions ~~~ Use UPPERCASE first letter

// function Triangle(a, b) {
//    this.a = a;
//    this.b = b;
//    this.getArea = function () {
//       return (this.a * this.b) / 2;
//    };
//    this.getHypotenuse = function () {
//       return Math.sqrt(this.a ** 2 + this.b ** 2);
//    };
// }
// // And then we use the "new" operator.

// const t1 = new Triangle(3,4)
// const t2 = new Triangle(9,12)

// THe new operator creates a blank object
// Then passes that object as "this"
// Then it returns that into your variable
// We use capital letter to show that it is a special constructor function.
// It's a pattern, a simple, reusable function.

/*************************************************************************************/

// INTRO TO PROTOTYPES
// so many methods for say arrays, sets, etc. are contained in "prototypes"
// Set.prototype
/* We can even change things like "push"!!!
Array.prototype.push = function (val) {
   console.log(`SO YOU WANT TO ADD ${val}?`);
   console.log("SORRY, DON'T FEEL LIKE IT");
};
*/

// OK
// Every time we make a new triangle currently, we are making a new copy of all our functions.
// We should maybe create a new prototype for the triangles

//So here's our code from above

// function Triangle(a, b) {
//    this.a = a;
//    this.b = b;
//    //    this.getArea = function () {
//    //       return (this.a * this.b) / 2;
//    //    };
//    //    this.getHypotenuse = function () {
//    //       return Math.sqrt(this.a ** 2 + this.b ** 2);
//    //    };
// }
// Triangle.prototype.getArea = function () {
//    return (this.a * this.b) / 2;
// };
// Triangle.prototype.getHypotenuse = function () {
//    return Math.sqrt(this.a ** 2 + this.b ** 2);
// };

// const t1 = new Triangle(3, 4);
// const t2 = new Triangle(9, 12);

/*************************************************************************************/

// OK LETS PUT IT ALL TOGETHER NOW

// THIS IS HOW WE DO A CLASS

class Triangle {
   constructor(a, b, c) {
      //our constructor function will validate each input (in a loop) and then assign them to our new Triangle object
      for (let side of [a, b, c]) {
         if (!Number.isFinite(side) || side <= 0) {
            throw new Error('Sides must be positive numbers!');
         }
      }

      this.a = a;
      this.b = b;
      this.c = c;
   }
   greet() {
      console.log('HELLO FROM TRIANGLE');
   }
   display() {
      return `Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`;
   }
   //GEOMETRY LESSON:
   getArea() {
      //destructure so we don't have to write "this.a" this, "this.b" that...
      const { a, b, c } = this;
      const s = (a + b + c) / 2;
      return Math.sqrt(s * (s - a) * (s - b) * (s - c));
   }
   isBig() {
      return this.getArea() > 50;
   }
}

// const firstTri = new Triangle();
// firstTri.a = 3;
// firstTri.b = 4;
// const secondTri = new Triangle();
// secondTri.a = 9;
// secondTri.b = 12;

// we use a CONSTRUCTOR function to make us able to pass in data.
// We say "this.a = a" etc...

//***********************//
// Also we can validate the data using the constructor function
// DO NOT RETURN A VALUE FROM A CONSTRUCTOR
// If we want to catch an invalid input we have to throw an error.

/********** METHODS ***********/

// functions placed in a class are "methods" (formally: "instance methods")
// They have access to properties of the object with "this"
// They can take arguments/return data like any other function

// We just added our getArea method.

const t1 = new Triangle(3, 4, 5);
const t2 = new Triangle(5, 9, 10);
const t3 = new Triangle(30, 40, 50);

// A method can call another method!
/*
class Triangle {
   getArea() {
      const { a, b, c } = this;
      const s = (a + b + c) / 2;
      return Math.sqrt(s * (s - a) * (s - b) * (s - c));
   }
   //Is this a big triangle?
   isBig(){
      return this.getArea() > 50;
   }
}

To call a method we need to call it on "this"
*/

//******************************************************************* */
// Inheritance and

// To write a theoretical RIGHT Triangle class:
// Let's copy the old thing, and then validate the hypotenuse.

// THIS IS A LOT OF DUPLICATION

/*
class RightTriangle {
   constructor(a, b, c) {
      //our constructor function will validate each input (in a loop) and then assign them to our new Triangle object
      for (let side of [a, b, c]) {
         if (!Number.isFinite(side) || side <= 0) {
            throw new Error('Sides must be positive numbers!');
         }
      }
      if (a * a + b * b !== c * c) {
         throw new Error('Invalid Hypotenuse');
      }
      this.a = a;
      this.b = b;
      this.c = c;
   }
   greet() {
      console.log('HELLO FROM TRIANGLE');
   }
   display() {
      console.log(`Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`);
   }
   //GEOMETRY LESSON:
   getArea() {
      //destructure so we don't have to write "this.a" this, "this.b" that...
      const { a, b, c } = this;
      const s = (a + b + c) / 2;
      return Math.sqrt(s * (s - a) * (s - b) * (s - c));
   }
   isBig() {
      return this.getArea() > 50;
   }
}
*/

// If we use the "EXTENDS" keyword, we can basically copy without duplicating. :

// subclass -vv    superclass -vv
class RightTriangle extends Triangle {
   constructor(a, b, c) {
      if (a * a + b * b !== c * c) {
         throw new Error('Invalid Hypotenuse');
      }
      //If we call "super()" we will run the og constructor as well!
      super(a, b, c);
      // We can add a new property too
      this.hypot = c;
   }
   display() {
      return 'Right ' + super.display();
   }
}

// When we extend to a "Subclass" we have all the access to methods on the "Superclass"

// We can add new methods on the extended class that does not exist in the superclass

// We can OVERRIDE methods from the superclass
