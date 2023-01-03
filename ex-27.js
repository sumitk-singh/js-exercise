function generateEmail() {
  const possibleCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let email = "";
  for (let i = 0; i < 10; i++) {
    email += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }
  return `${email}@example.com`;
}

console.log(generateEmail());  // Output: "hf567dskjg@example.com"
