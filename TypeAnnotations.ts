// TypeScript works by adding enhanced syntax to JavaScript and then transforming it to JavaScript after the TypeScript compiler does its own checks. It doesn't change JavaScript's type system. Instead, it adds more checks to it.

// 0: what is superset in programing?
// 1: what is compiler in programing?
// 1: Type Annotations
//     1.1: what is type annotations?
//     1.2: How to use it?

// let variableName: type;
// let variableNames: type = values;

// how we write variables

// Javascript
let myVari = 10;
// TypeScript
let myVariable: number = 10;

// javascript Data Types
// =======================

// 1: number;
// 2: bigint;
// 3: string;
// 4: boolean;
// 5: null;
// 6: undefined;
// 7: symbol;

// Typescript Data Types
// =====================
// 1: string
// 2: number
// 3: boolean
// 4: Array
// 5: Tuple
// 6: Enum
// 7: Any
// 8: Void
// 9: Null
// 10: Never
// 11: Object

let names: string = "John"; // String
let age: number = 25; // Number
let active: boolean = true; // Boolean

// All sorts of Array types
let marksNum: number[] = [80, 85, 75]; // Array Number type
let marksStr: string[] = ["Hello", "Ashikur", "Rahman"]; // Array String Type
let chooseAnyOne: (number | string | boolean | null)[]; // Only these data types allows not others
let marksAny: any[] = [80, "Hello", undefined, true]; // Array any Type

// Tuples
let allOptions: [string, number, number, boolean, string] = [
  "Ashik",
  25,
  12,
  true,
  "string",
]; // only assignable depends on index types

// 6: Enum
// Meaning : An enum is a group of named constant values. Enum stands for enumerated type.

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

console.log(StatusCodes.NotFound); // logs 404
console.log(StatusCodes.Success); // logs 200

// ======================================================
// 11: Object Types in Typescript

// 1.0 => define the data types first and store the value by using assigning operator
let myObj: object;
myObj = {
  name: "Ashikur Rahman",
  age: 20,
};

// 2.0 => defing the object types differently

let employers: {
  firstName: string;
  lastName: string;
};

employers = {
  firstName: "Ashikur",
  lastName: "Rahman",
};

// 3.0 => storing object types and values same place
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

// ======================================================
