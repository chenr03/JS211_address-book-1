"use strict";
// ?store empty variables
let addressArray;
window.onload = function () {
  // ?call functions on page load
  getAddress();
};
const consoleData = () => {
  console.log(addressArray);
  // console.log(addressArray.results[0]);
  // console.log(addressArray.results[0].gender);
  // console.log(addressArray.results[0].name);
  // console.log(addressArray.results[0].location);
  // console.log(addressArray.results[0].email);
  // console.log(addressArray.results[0].phone);
  // console.log(addressArray.results[0].picture.thumbnail);
};
const getAddress = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((address) => (addressArray = address));
};
