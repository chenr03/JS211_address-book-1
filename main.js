
'use strict';
// * Store empty variables
let addressArray;
// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  //  *Call functions on page load.
  getAddress();
};
const consoleData = () => {
  console.log(addressArray);
  // console.log(addressArray.results[0]);
  // console.log(addressArray.results[0].gender);
  // console.log(addressArray.results[0].name);
  // console.log(addressArray.results[0].location);
  // console.log(addressArray.results[0].phone);
  // console.log(addressArray.results[0].email);
  // console.log(addressArray.results[0].picture.thumbnail);
};

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getAddress = () => {
  fetch('https://randomuser.me/api/?results=5')
    .then((res) => res.json())
    .then((address) => (addressArray = address));
};
