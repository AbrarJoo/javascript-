let names = ["Abrar", "suhail", "wahid", "shakir"];
let [first, second, third, fourth] = names;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

//we can skip elemts thta we are not intersted in like this
let arr = ["hello", "its", "abrar", "orange", "apple"];
let [firstt, , thirdd, ...rest] = arr;
console.log(firstt);
console.log(thirdd);
console.log(rest);
