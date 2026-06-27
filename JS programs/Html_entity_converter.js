function convertHTML(str) {
  let result = "";
  for (const char of str) {
    if (char === "&") {
      result += "&amp;";
    } else if (char === "<") {
      result += "&lt;";
    } else if (char === ">") {
      result += "&gt;";
    } else if (char === '"') {
      result += "&quot;";
    } else if (char === "'") {
      result += "&apos;";
    } else {
      result += char;
    }
  }
  return result;
}

let test1 = convertHTML("Schindler's List");
console.log(test1);
