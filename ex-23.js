//Check Palindrome Number

const number = 121;

if(String(number)==String(number).split("").reverse().join("")){
    console.log(`${number} is palindrome number`);
}

else{
    console.log(`${number} is not a palindrome number`);
}











