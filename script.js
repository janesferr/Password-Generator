// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Create character classes as strings (arrays of characters)
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = lowerCase.toUpperCase();
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function writePassword() {
    const passminlen = 8;
    const passmaxlen = 125;
    const askPassLengthMessage = `What is the length of the password: (Please choose a number between ${passminlen} and ${passmaxlen}) `;
    var passwordLength = Number(prompt(askPassLengthMessage));

    while (Number.isNaN(passwordLength) || passwordLength > passmaxlen || passwordLength < passminlen) {
        var friendly_error = Number.isNaN(passwordLength) ? 'A number is required': 
            ('The number must be ' + (passwordLength > passmaxlen ? `less than ${passmaxlen}`: `greater than ${passminlen}`));
        alert(friendly_error);
        passwordLength = Number(prompt(askPassLengthMessage));
    }

    var useLowerCase = confirm("Do you want lowercase?");
    console.log('lowercase:', useLowerCase);

    var useUpperCase = confirm("Do you want uppercase?");
    console.log('uppercase', useUpperCase);

    var useNumbers =  confirm("Do you want numeric?");
    console.log('numbers', useNumbers);

    var useSymbols = confirm("Do you want special characters?");
    console.log('symbols', useSymbols);

    var password = generatePassword(passwordLength, useLowerCase, useUpperCase, useNumbers, useSymbols);
    document.getElementById("password").innerHTML = password;
}

function generatePassword(passwordLength, useLowerCase, useUpperCase, useNumbers, useSymbols) {
    var alphabet = '';

    if (useLowerCase === true) {
        alphabet += lowerCase;
    }
    if (useUpperCase === true) {
        alphabet += upperCase;
    }

    if (useNumbers === true) {
        alphabet += numbers;
    }

    if (useSymbols === true) {
        alphabet += symbols;
    }

    console.log('Alphabet for password generation is');
    console.log(alphabet);

    console.log('The length of the password alphabet is', alphabet.length);

    var newpass = '';
    for (var i = 0; i < passwordLength; i++ ) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        
        if (randomIndex >= alphabet.length) {
            console.log('Booo!, I got value out of the expected range', randomIndex);
        }
        
        newpass += alphabet.charAt(randomIndex);
    }
    return newpass;
}
