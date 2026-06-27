const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

const jsonstring = JSON.stringify(developerObj);
console.log(jsonstring);

const jsonobj = JSON.parse(jsonstring);
console.log(jsonobj);
