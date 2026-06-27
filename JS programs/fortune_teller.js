const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

// const min=1
// const max=5
const randomNumber = Math.floor(Math.random() * 5) + 1;
const selectedFortune = randomNumber;

switch (selectedFortune) {
  case 1:
    console.log(fortune1);
    break;

  case 2:
    console.log(fortune2);
    break;

  case 3:
    console.log(fortune3);
    break;

  case 4:
    console.log(fortune4);
    break;

  case 5:
    console.log(fortune5);
    break;

  default:
    console.log("ERROR, try again later");
    break;
}

console.log("game over");
