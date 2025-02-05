//Function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.

const formatArray = (arr) => `The array has ${arr.length} items, and the first item is "${arr[0]}", and the last item is "${arr[arr.length - 1]}".`

const items = ['apple', 'banana', 'orange'];
const message = formatArray(items);
console.log(message);
// Output: The array has 3 items, and the first item is "apple", and the last item is "orange".

//function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

const formatProduct = (product) => `${product.name} costs INR ${product.price} and is ${product.inStock ? 'in' : 'not in'} stock.`

const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
};

const message1 = formatProduct(product);
console.log(message1);
// Output: Socks costs INR 249 and is in stock.

//Function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

const findPerson = (persons, name) => {
    return persons.map(person => person.name === name ? person : null)
}

console.log(findPerson([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Akhil"))

//Function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

const pickFirstAndSecond = ([first, second, ...rest]) => `{first: '${first}', second: '${second}'}`

console.log(pickFirstAndSecond(["grapes", "banana", "apple"]))
// {first: 'grapes', second: 'banana'}

console.log(pickFirstAndSecond(["red", "blue", "green"]))
// {first: 'red', second: 'blue'}

//Convert the following code to ES6+ syntax with minimum number of characters.

/*function startsWithA(str) {
    if(str.charAt(0) === 'A') {
        return true;
    } else {
        return false
    }
}*/
  
const startsWithA = (str) => str.charAt(0) === 'A'

console.log(startsWithA("Akshita"))
// true
console.log(startsWithA("Jeena"))
// false

//Write an ES6 function to return only the first character of the given array.

const printFirstCharacter = ([first, ...rest]) => first

console.log(printFirstCharacter([1, 2, 3, 5, 8]))
// 1

//function to return the last 5 characters as an array from the given array.

const printLastFive = ([first, second, ...rest]) => rest

console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]))
// [1, 2, 3, 5, 8]

//Write an ES6 function to return the second element of the given array by multiplying 20 to it.

const printSecondCharacter = ([first, second, ...rest]) => second * 20

console.log(printSecondCharacter([1, 2, 3, 5, 8]))
// 40

//Function to return the second element of the given array by adding “Hello” before it.

const sayHello = ([first, second, ...rest]) => `Hello ${second}`

console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]))
// Hello Sweta

console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]))
// Hello Rakesh

//function to return sum of all numbers at even indices of the given array.

const sumOfEvenIndices = (arr) => arr.filter((_, index) => index % 2 === 0).reduce((acc, curr) => acc + curr, 0)

console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30

//function to return the sum of only first 2 elements of the array .

const sumFirstTwoElements = ([first, second, ...rest]) => first + second

console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])) // 14
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])) // 26

//function to return the first element which is a multiple of 5 in the given array.

const printMultipleOfFive = (arr) => arr.find(num => num % 5 === 0)

console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])) // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) // 5

//function which takes in the given object and returns another object only with the properties postalCode and city in it.

const getAddress = ({postalCode, city}) => ({postalCode, city})

const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
  }
  
  console.log(getAddress(userData));
  // {postalCode: '12134', city: 'Germany'}

//  function which takes in the given object and returns a sentence which indicates name of the person and where the person lives.

const printData = ({name, country}) => `${name} lives in ${country}.`

const userData1 = {
  name: 'Gaurav',
  postalCode: '12134',
  country: 'Japan',
}
console.log(printData(userData1)); // Gaurav lives in Japan

const userData2 = {
  name: 'Pritam',
  postalCode: '560223',
  country: 'India',
}
console.log(printData(userData2)); // Pritam lives in India

//function which takes a product object and returns a sentence about the product using ES6 features.

const printProductDetails = ({name, specification: {capacity, size}}) => `${name} which is of ${size}, has a capacity of ${capacity}.`

const product2 = {
  name: "Apple MacBook Air 2020",
    specification: {
        capacity: "256GB",
      size: "13.3 Inch"
    },
  price: 82900
}
console.log(printProductDetails(product2)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.