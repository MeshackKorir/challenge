// Give me the sum of the prices (try chaining methods) [{price: 10.99}, {price: 5.99}, {price: 29.99}]



const items = [{ price: 10.99 }, { price: 5.99 }];

const totalPrice = items
  .map(item => item.price) // Extract prices into a new array
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sum the prices

console.log(totalPrice); // Output: 46.97