import getElement from "./getElements.js";

const img = getElement(".card-img-top");

const userName = document.getElementById("first");

const userSurname = document.getElementById("last");

const userLocation = document.getElementById("street");

const userPhone = document.getElementById("phone");

const userEmail = document.getElementById("email");

const displayUser = (person) => {
  console.log("User displayed!");

  img.src = person.image;

  userName.textContent = person.name;
  userSurname.textContent = person.last;
  userLocation.textContent = person.location;
  userPhone.textContent = person.phone;
  userEmail.textContent = person.email;
};

export default displayUser;
