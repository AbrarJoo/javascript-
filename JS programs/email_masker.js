function maskEmail(email) {
  let at = email.indexOf("@");
  let first = email[0];
  let last = email[at - 1];
  let domain = email.slice(at);
  let stars = "*".repeat(at - 2);

  return first + stars + last + domain;
}

console.log(maskEmail("log42241@gmail.com"));
