# Javascript ES6 Tutorial
Udemy Course: The Full JavaScript &amp; ES6 Tutorial.  This respository contains any information I've learned and projects included in the course.

## Introduction to Javascript and language essentials
What is Javascript?
Javascript is a small, lightweight, object-oriented scripting language that connects to objects in hosts environments and controls them.
JS on the client-side accesses the Document Object Model (DOM) to handle user interaction
JS on the server-side can run servers and communicates with databases

The <!DOCTYPE html> tag is used to tell the browser which version of html to use.

The head tag is used for header information such as a title.  The body tag is the main content of the page.  These are called containers.

The <meta> tag gives the browser more exact specifications to use.

The DOM gives us full access to create dynamic HTML.  The document is an object that has attributes that can be reference (i.e. an id).

Any number mod(%) by 2 will return 0 for an even and 1 for an odd.

What is a Transpiler?
A transpiler reads code written in one language and produces the equivalent code in another.

Browsers currently only have widespread support of older JS.

Babel transpiles ES6 back into the support pre-es6 JS.

Webpack is a bundler for javascript modules.  It bundles modules into one .js file and also comes with a dev-server.

npm init -y will create a new package.json file

npm i <package-name>@<version #> --save-dev will install a package with a specific version in your directory.  The --save-dev portion will 
make sure the package is only available in your dev environment and will not be deployed to your production application.

In package.json, can add a start and build object which contains parameters for building for development and production.  The production build translates the code into a build which is optimized for browsers.

Can create a webpack.config.js file to tell webpack how to behave.  The entry key points to the code you want to bundle.  The output key tells you what to generate.

Webpack looks for absolute paths to build. import the 'path' module to help with obtaining the absolute path.

Webpack-dev-server can be used to automatically update the output when the source code is modified.

The main job of Babel is to transpile es6 code to es5. Babel-core is the primary transpiler.  Babel-loader allows us to import and export Javascript files as their own components and modules.  Babel-preset-env adds onto babel-core to add support to es6 based on the specific browser.

To tell Babel to include the env preset, we add a file called .babelrc with the value "env".

## Introduction to ES6 and Fundamentals
In ES6, the var keyword is replaced by let.  const is a more strict version of the let keyword that cannot be modified.

Block scoping can be used to declare local variables which cannot be access outside of the encompassing function.

Template literals `` allow for the embedding of variables into a string.

const arrays will still allows dot methods to modify the array (i.e. push/pop)

The spread operator allows you to merge arrays into other arrays by inserting the elements into the array.

Rest parameters are similar to the spread operator.  They allow you to supply multiple values into a function.

Destructuring assignment allows you to decompose an array into individual values.  For arrays, use square brackets for the variable declaration.  For objects, use curly braces.  For objects, if you've declared variables previously that you would like to use, you can surround the curly braces with parenthesis.

Arrow functions allow for simplification of function declarations.  They allow functions to be anonymous.  Common usage is for helper methods (i.e. map and filter).  They replace the function keyword.  It allows you to do inline function calls and does not require a return keyword.  ES6 ships with many helper methods.

.map() creates new arrays by calling a function on individual elements in an array.

.filter() creates a new array with a test of value on the array.

.repeat() returns a new string of concatenated copies. Also works with template strings.

.startsWith() returns true/false depending on if the string starts with

.endsWith() returns true/false depnding on if the string ends with

.includes() returns true/false if contains the string

Number.isFinite() checks if a number is finite.

Number.isSafeInteger() checks to make sure Javascript can handle the number

Modules refer to unique code in their own files. Handles via export/import keywords.  Use the export keyword with curly braces to allow variables/methods to be accessed in other scripts.  Use the import keyword to import the same values into your gaining script. Can export multiple by separating with a comma.

The default keyword creates a fallback for the module.

###Classes in Javascript: 

Related to each other through inheritance
Defined with the class keyword and uses a constructor keyword
The extends keyword allows you to create child classes
To aknowledge a parent class's values, use the super keyword.
To export a class, use export default <class name>

static methods allow you to access a classes methods without a specific instance of a class.

###Object-Oriented Programming

Objects or classes hold relevant data that interact with each other.  This is not the same for Javascript which is a prototypical inheritance model.  Classes are extractions on top of Javascript prototypes.

##Data Structures & Algorithms

###Sets

Sets are unique value arrays.  They are declared using the Set keyword.  Sets can contain multiple types.  The .has() method deals with checking for contained elements.  The .split() method splits an array from a passed in string of characters.  A clever way to get the unique values in an array is to convert it to a set and run the .has() method.

###Maps

Maps have keys and values.  Maps share much similiarity to objects.  Maps beat objects with superior keys, and the size property.  
You can map a key value pair by creating a new map with an array of key-values.
The .entries() method allows you to iterate through a mapping to get the keys and the values.  You can reference them by the key and value variables respectively.
The .get() keyword will return the value stored in the key.

Example:

```JavaScript
let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(numArr);

for(let [key, value] of valMap.entries()){
    console.log(`${key} points to ${value}`);
}
```

## In-Depth ES6 Exploration


###Closures

Closures refer to functions that remember the environment that they were created in.  Enable creation of funtion factories.  Allow us to use private data.  You do this by calling a function which reveals the hidden variables value  in the method.  This concept is also called lexical scoping.  Javascript keeps track of a variable to understand where it can be accessed.

###Function Factories

Take one or more arguments and return new functions based on those arguments.  This allows you to create new functions with slightly different behaviour.

Example:

```JavaScript
***const product = (x) => y => y * x;***

const product = (x) => {
    return y =>{
        return y * x;
    }
}

let mult5 = product(5);
console.log(mult5(3));

let double = product(2);
console.log(double(9));
```

###Generators

They break the typical "run to completion" model for functions.  They can pause and resume with yield and next().  To use generators for this tutorial, need to add the babel-polyfill entry to the webpack.config.js file.  The generator will kick out whatever is in the yield statement until it is empty.  One example of the use of a generator is to generate a set of unique ids.  Infinite loops will not crash programs if written properly with a generator.  Can reset generators by passing in an optional value into your .next() statement.

Example: 

```JavaScript
function* countMaker(){
    let count = 0;

    while(count < 3){
        yield count += 1;
    }
}

let countGen = countMaker();
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);
```

###Iterators

Iterators allow you to access items from a collection one at a time, and keeps track of its position.

Example:

```JavaScript
//Iterator
const arrayIterator = (array) => {
    let index = 0;

    return {
        next: () => {
            if(index < array.length){
                let next = array[index];
                index += 1;
                return next;
            }
        }
    }
}

let it = arrayIterator([1,2,3]);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//Generator
function* arrayIterator(){
    yield* arguments;
}

var it = arrayIterator(1,2,3);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
```

##Synchronous & Asynchronous Programming

Synchronous programs run in sequence without blocking.

Asynchronous programs divert blocking to event handlers.  This allows us to interact with databases, servers, and apis.

User interfaces and browsers handle events asynchronously.

Promises allows us to handle asynchronous functions in ES6.  They have 3 states: **pending**, **fulfilled**, and **rejected**.

###Promises

The .then() method accepts a function that gets the promises return value when fulfilled.

Example:

```JavaScript
//resolve
let p = new Promise((resolve, reject) => {
    resolve('Resolved promise data');
})

p.then(response => console.log(response));

//reject
let p = new Promise((resolve, reject) => {
    reject('Rejected promise data');
})

p.then(response => console.log(response))
.catch(error => console.log(error));
```

###HTTP & Fetch

HTTP - HyperText Transfer Protocol.  A server provides resources based on an http request.

GET - retrieves data and has no secondary effect.

POST - sends data to a server to add resources.

HEAD - asks for meta information.

DELETE - removes a specified resource.

PATCH - partially modifies a resources.

Fetch - provides access to http methods.  Still considered an experimental technology and may not be supported in older browsers.  The process of getting data using the fetch command is also referred to as consuming.

[Json Placeholder](jsonplaceholder.typicode.com) is a testing tool for testing api resources.

You can chain multiple promises by chaining multiple .then statements.  You can call methods provided by promises such as the .json() method to get returned json.

[Google Apis](https:www.googleapis.com/) also gives you access to some apis with data.

Example:

```JavaScript
const root = 'https:www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

fetch(root, {
    method: "GET"
})
.then(response => response.json())
.then(json => console.log(json));
```

###ES7

Exponent Operator: `2**5`

More support for Arrays

.includes - `let b = "wonderful".includes("wonder")` , `let b = [2,3,4,5,6].includes(4);`

To upgrade to ES7 in the project, run `npm install babel-preset-es2016 --save-dev`

It takes a lot to propose new developments for Javascript.

###Proposals for ES8

More object manipulate with .values() and .entries()

```JavaScript
let obj = {
    a: 'one',
    b: 'two',
    c: 'three'
};

let values = Object.values(obj);
let entries = Object.entries(obj);
```

Async Functions: further support asynchronous functions

The _await_ keyword puts a pause in the async function and does not let it continue until the promise resolves.  This means we can write code that depends on the result of the promise, and we don't interact with data that is not valid.  We can also use the `Promise.all()` method to run multiple promises concurrently.

```JavaScript
async function async_one(){
    return "one";
}

async function async_two(){
    throw new Error('Issue with async!');
    //return "two";
}

async function async_three(){
    const one = await async_one();
    console.log(one);
    const two = await async_two();
    console.log(two);
}

async function async_four(){
    const[res_one, res_two] = await Promise.all(
        [async_one(), async_two()]
    )
    console.log(res_one, res_two);
}

async_one().then(response => console.log(response));
async_two().catch(error => console.log(error));
async_three();
async_four();
```

To get the new ES8 functionality, run `npm install babel-preset-es2017`

#Book Explorer - A React application

Book explorer allows you to search the Google Books Api to find books and click on buttons which takes you to a page displaying the information.

`npm install babel-preset-react react react-dom react-bootstrap --save-dev`

JSX in ES6 adds XML/HTML like syntax to components to add to the html

The Global.js script allows us to use React components with methods that support rendering of React components on our interface.
