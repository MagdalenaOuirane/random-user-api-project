import getElement from "./utilis/getElements.js";
import fetchPerson from "./utilis/fetchPerson.js";
import displayUser from "./utilis/displayUser.js";

const showUser = async () => {
  const person = await fetchPerson();
  displayUser(person);
};

const generatePersonBtn = getElement(".btn");
console.log(generatePersonBtn);

window.addEventListener("click", showUser);
generatePersonBtn.addEventListener("click", showUser);
