# Interview Questions Answers
### **1. What are some benefits of using TypeScript over JavaScript in a project?**
---
**Answer: Strongly typed superset of JavaScript, TypeScript compiles to plain JavaScript. It is an object-oriented, open-source programming language which extends JavaScript by including interfaces, classes, static type annotations, and other features. For large projects, TypeScript offers advantages including early error detection, code autocompletion, greater code maintainability, and scalability. Additionally, it includes its own type system that may detect type-related errors at compile time and supports the most recent ECMAScript features. Under the terms of the Apache 2 license, Microsoft creates and updates TypeScript. The browser is not used to run it directly. To compile and generate a JavaScript file, a compiler is required. The ".ts" extension designates a TypeScript source file. Any legitimate ".js" file can be used by renaming it to ".ts" file.** 

**JavaScript, in contrast, is an interpreted scripting language that runs in a server-side or browser environment. Variables can hold values of any type because it is dynamically typed, and a variable's type may change while a program runs. While this gives JavaScript a lot of flexibility, it can also result in runtime errors that are challenging to identify and debug.**

***

### **2. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each?**
---
**Answer: Optional chaining (`?.`) and nullish coalescing (`??`) operators in TypeScript help handle potential null or undefined values more effectively. The optional chaining operator allows you to access properties or methods on an object without causing an error if the object is null or undefined. For example: `const length = user?.address?.city?.length;` will not throw an error if any of these properties is null or undefined. On the other hand, the nullish coalescing operator provides a default value when encountering null or undefined, ensuring that you get a fallback value in case the variable is not defined. For example: `const username = inputUsername ?? 'Guest';` assigns the value of `inputUsername` if it's defined, otherwise, it defaults to 'Guest'. These operators simplify code, making it more robust and concise in handling potential null or undefined values.**

***

### **3. How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?**
---
**Answer: In TypeScript, asynchronous operations are commonly handled using async/await. This syntax allows you to write asynchronous code in a more sequential and readable manner. Instead of relying on callbacks or chaining promises, async/await simplifies the syntax and makes asynchronous code resemble synchronous code, improving code readability. It also helps manage errors more efficiently with try-catch blocks. The advantages include clearer and more concise code, better error handling, and improved maintenance, making asynchronous operations in TypeScript more manageable and developer-friendly compared to traditional callback or Promise-based approaches.**

***

### **4. How can you use TypeScript's enums, and what are their advantages?**
---
**Answer: Here's an example of using enums in TypeScript for T-shirt sizes:**

```TypeScript
enum TShirtSize {
  S = "Small",
  M = "Medium",
  L = "Large",
  XL = "Extra Large"
}

function printSize(size: TShirtSize): void {
  console.log(`The T-shirt size is ${size}`);
}

printSize(TShirtSize.S); // Output: The T-shirt size is Small
printSize(TShirtSize.XL); // Output: The T-shirt size is Extra Large

```

**The enum TShirtSize in this example has four possible values: S, M, L, and XL, each with a corresponding string value. Then, a function called printSize is defined, which accepts an argument of type TShirtSize and logs a message to the console with the relevant string value. Finally, we use printSize to test the function by passing it two distinct enum values.**

**Advantages: TypeScript enums offer a way to define named sets of constants, making code more readable and intentional. By assigning meaningful names to values, enums enhance code clarity and reduce the risk of errors associated with using unclear "magic values." They provide autocompletion suggestions, improving the developer experience and reducing typos. With enums, TypeScript introduces type safety, ensuring that only valid values are used. Overall, enums promote code consistency and serve as a helpful tool for creating more maintainable and error-resistant code.**

***

### **5. Explain the role of type guards in TypeScript and provide an example of a custom type guard.**
---
**Answer: Type guards in TypeScript help improve type safety by narrowing down the type of a variable within a certain block of code. They are particularly useful when working with union types. A custom type guard is a function that checks a specific condition and returns a boolean value to indicate whether a variable is of a certain type. For instance, a type guard function named isNumber could check if a given variable is a number. Here's a simple example:**

```TypeScript
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

const result: any = 42;

if (isNumber(result)) {
    console.log("It's a number:", result.toFixed(2));
} else {
    console.log("Not a number");
}
```
**In this example, isNumber acts as a type guard, allowing TypeScript to infer that within the if block, result is of type number, enabling safe usage of number-specific operations.**

***

### **6. Can you give an example of how to use "readonly" properties in TypeScript?**
---
**Answer: A property of an object can be made read-only in TypeScript by using the readonly keyword. This indicates that once a property is set, it cannot be changed. Here's an illustration:**

```TypeScript
interface Person {
  readonly name: string;
  age: number;
}

let person: Person = { name: "Riasat", age: 32 };

// This line will cause a compile-time error because the 'name' property is readonly
person.name = "Raihan";

```

**In this illustration, the name and age properties on the Person interface are read-only. Because the name property of the person object is read-only, TypeScript will throw an error when we attempt to alter it. This can help to prevent the unintentional alteration of crucial code properties.**

***

### **7. Explain what a union type is in TypeScript and provide an example of its usage?**
---
**Answer: A union type in TypeScript allows a variable to hold values of multiple types. It is denoted by the pipe (|) symbol. For example, a variable with a union type number | string can store either a number or a string. Here's a simple example:**

```TypeScript
let result: number | string;

result = 42; // Valid, as it's a number
console.log(result.toFixed(2));

result = "Hello"; // Valid, as it's a string
console.log(result.toUpperCase());

```
**In this example, result can be assigned either a number or a string, and TypeScript will infer the appropriate type within the respective assignments.**