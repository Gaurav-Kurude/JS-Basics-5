// //  Creating a promise
// let orderFood = new Promise((resolve, reject) => {
//   let foodDelivered = true;

//   if (foodDelivered) {
//     resolve("Food arrival Successfully");
//   } else {
//     reject("Sorry, Food was not Delivered.");
//   }
// });
// console.log(orderFood);

// // handle a promise
// orderFood
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response)=> {
    // you have a fetched data here
    return response.json();
  })
  .then((data)=> {
    // you can use fetched data here
    console.log(data);
  })
  .catch((error)=> {
    // you have some error with data fetching
    console.log("Something went wrong",error);
  });