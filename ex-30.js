function generateMobileNumbers() {
  const mobileNumbers = [];
  for (let i = 0; i < 10; i++) {
    // Generate a random mobile number in the format "07XXX YYYYYY"
    const mobileNumber = "07" + Math.floor(Math.random() * 1000) + " " + Math.floor(Math.random() * 1000000);
    mobileNumbers.push(mobileNumber);
  }
  return mobileNumbers;
}

console.log(generateMobileNumbers());
