This app will run in the browser and will feature dynamically updated HTML and CSS powered by Javascript code that I have writen.  This has a clean and polished, responsive user interfacet that adapts to multiple screen sizes.  The password can include special characters which an employee with access to sensitive data can randomly generate a password that meets certain criteria which creates a strong password that provides greater security.  

## User information

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

This website generates a certain length of password with a minimum of 8 in length for password security.
It generates using letters, numbers, and special characters. It prompts the user if they want to use all these criteria and adds it to the password.

![the website screenshot of the website of Password Generator](PasswordGenerateimage.png?raw=true "Password Generator")

Here is the deployed link through github: https://janesferr.github.io/Password-Generator/
