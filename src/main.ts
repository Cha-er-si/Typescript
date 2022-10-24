// const a = "1";
// console.log("aaa", a);
/* -------------------- */
/* Variables */
// const hello = "world";
// hello = "foo";
// let hello = "world";
// hello = "foo";
// hello = true;
// let hello: string = "world";
// hello = true;
/* -------------------- */
/* Functions */
// const getFullName = (name, surname) => {
//   return name + " " + surname;
// };
// console.log(getFullName(true, ['foo']));
// const getFullName = (name: string, surname: string) => {
//   return name + " " + surname;
// };
// console.log(getFullName("Prince", "Charles"));
// const getFullName = (name: string, surname: string): string => {
//   return name + " " + surname;
// };
// console.log(getFullName("Prince", "Charles"));
/* -------------------- */
/* Objects */
// interface User {
//   name: string;
//   age?: number;
// }
// const user: { name: string; age: number } = {
//   name: "Moster",
//   age: 13,
// };
// const user2: { name: string; age?: number } = {
//   name: "Jack",
// };
// const user3: User = {
//   name: "Jack",
// };
// console.log(user.name);
/* -------------------- */
/* Function in interfaces */
// interface UserInterface {
//   name: string;
//   age?: number;
//   getMessage(): string;
// }
// const user: UserInterface = {
//   name: "Foster",
//   age: 30,
//   getMessage() {
//     {
//       return "Hello" + name;
//     }
//   },
// };
// console.log(user.getMessage());
/* -------------------- */
/* Union operator */
// interface UserInterface {
//   name: string;
//   surname: string;
// }
// let username: string = "alex";

// let pagName: string | number = "1";
// let errorMessage: string | null = null;

// let user: UserInterface | null = null;

// //Bad Code
// let someProp: string | number | null | undefined | string[] | object;

/* -------------------- */
/* Type Aliases */
// type ID = string;
// type PopularTag = string;
// interface UserInterface {
//   id: ID;
//   name: string;
//   surname: string;
// }

// const popularTags: PopularTag[] = ["dragon", "coffee"];
/* -------------------- */
/* Combination of Union and Type Aliases */
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;
interface UserInterface {
  id: ID;
  name: string;
  surname: string;
}

const popularTags: PopularTag[] = ["dragon", "coffee"];

const dragonsTag: MaybePopularTag = "dragon";
