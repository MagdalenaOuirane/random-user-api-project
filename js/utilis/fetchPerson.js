const URL = `https://randomuser.me/api/`;

const fetchPerson = async () => {
  console.log("fetched!");
  const data = await fetch(URL);

  const response = await data.json();

  const person = response.results[0];
  console.log("Person object", person);

  const { large: image } = person.picture;
  const { first, last } = person.name;
  const {
    street: { number, name },
  } = person.location;

  const { phone, email } = person;

  return {
    image,
    name: `${first}`,
    last: ` ${last}`,
    location: `${number} ${name}`,
    phone: phone,
    email: email,
  };
};

export default fetchPerson;
