'use strict';
// * Store empty variables
let contactArray;
// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  //  *Call functions on page load.
  getAddress();
};
const consoleData = () => {
  console.log(contactArray);
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
    .then((address) => (contactArray = address.results));
};

const getGender = (array) => {
  array.map((contact) => {
    const displayUser = document.getElementById('page-container');
    const html = `
     <div id="card-container">
    <picture>
          <img src="${contact.picture.thumbnail}" alt="user image" class="user-image" />
        </picture>

        <h1>${contact.name.first} ${contact.name.last}</h1>
        <p>(${contact.gender})</p>
        <h6>${contact.email}</h6>
        <h6>${contact.phone}: Home</h6>
        <h6>${contact.cell} : Cell</h6>
        <h6>${contact.location.street.number} ${contact.location.street.name}</h6>
        <h6>${contact.location.city}</h6>
        <h6>${contact.location.state}</h6>
        <h6>${contact.location.postcode}</h6>
      </div>
    </div>
    </div>
    `;
    displayUser.insertAdjacentHTML('afterbegin', html);
  });
};

const displayUserData = () => {
  getGender(contactArray);
};

// const displayFivePost = () => {
//   const showFivePosts = document.getElementById('five-posts');
//   fivePosts.map((post, index) => {
//     const li = `<li>#${index + 1}, Title: ${post.title}: ${
//       post.body
//     }, by user: ${post.userId}</li>`;
//     showFivePosts.insertAdjacentHTML('beforeend', li);
//   });
// };
