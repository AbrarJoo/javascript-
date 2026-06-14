const person = {
  name: "alice",
  job: "none",
  location: "canada",
};

//dot notation
console.log(person.job);
console.log(person.name);

//brakcet notation
console.log(person["name"]);
console.log(person["location"]);

//deleting property
delete person.job;

//job was deleted
console.log("-");
let { name, ...remaing } = person;
console.log(person);

//using the object constructor
new Object();
//
function toObject(value) {
  if (value === null || value === undefined) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  return Object(value);
}

console.log(toObject(null));

console.log(toObject(true));

console.log(toObject([1, 2, 3]));
