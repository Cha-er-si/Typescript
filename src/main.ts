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
// type ID = string;
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null;
// interface UserInterface {
//   id: ID;
//   name: string;
//   surname: string;
// }

// const popularTags: PopularTag[] = ["dragon", "coffee"];

// const dragonsTag: MaybePopularTag = "dragon";
/* -------------------- */
/* Void */
// const doSomething = (): void => {
//   console.log("doSomething");
// };

/* -------------------- */
/* Any */
// let foo: any = "foo";
// console.log(foo.bar());

/* -------------------- */
/* Never */
// const doSomething = (): never => {
//   throw "never";
//   console.log("doSomething");
// };

/* -------------------- */
/* Unkown */
// let vAny: any = 10;
// let vUnknown: unknown = 10;

// let s1: string = vAny;
// let s2: string = vUnknown;

// console.log(vAny.foo());
// console.log(vUnknown.foo());

/* -------------------- */
/* Type Assertion */
// let vAny: any = 10;
// let vUnknown: unknown = 10;

// let s1: string = vAny;
// let s2: string = vUnknown as string;

// let pageNumber: string = "1";
// let numericPageNumber: number = pageNumber as unknown as number;

/* -------------------- */
/* DOM */
// let page: any = "1";
// let pageNumber = page as string;

// const someElement = document.querySelector(".foo") as HTMLInputElement;

// console.log("someElement", someElement);
// const someElement = document.querySelector(".foo");

// someElement.addEventListener("blur", (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log("event", target.value);
// });

/* -------------------- */
/* Classes */
// interface UserInterface {
//   getFullName(): string;
// }
// class User implements UserInterface {
//   private firstName: string;
//   protected lastName: string;
//   readonly unchangeableName: string;
//   static readonly maxAge = 50;

//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.unchangeableName = firstName;
//   }

//   changeUnchangeableName(): void {
//     // this.unchangeableName = "foo";
//   }

//   getFullName(): string {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Admin extends User {
//   private editor: string;

//   setEditor(editor: string): void {
//     this.editor = editor;
//   }

//   getEditor(): string {
//     return this.editor;
//   }
// }

// const user = new User("Foo", "lessons");
// const user1 = new User(true, "lessons");
// console.log(user.getFullName());
// console.log(User.maxAge);

// const admin = new Admin("foo", "bar");
