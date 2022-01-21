const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  "Welcome to Andrew's Super Cool Password Validator! Your password needs to be 10 characters long and contain a Special character. What passsword would you like to validate?",
  function (input) {
    let SP = 0;
    let LP = 0;
    let password = input.split("");
    for (let i = 0; i < password.length + 1; i++) {
      if (
        password[i] === "!" ||
        password[i] === "@" ||
        password[i] === "#" ||
        password[i] === "$" ||
        password[i] === "?"
      ) {
        SP = 1;
      }
    }
    if ((SP === 0)) {
      console.log(
        "Can you try a little harder? Your password needs at least one special charater (!, @, #, $, or ?)"
      );
    }
    if (password.length >= 10) {
      LP = 1;
    }
    if (LP === 0){
    
      console.log(
        "Can you try a little harder? You're password needs to be at least 10 characters long"
      );
    }
    if (SP === 1 && LP === 1) {
      console.log("Great Success! Your password is valid!");
    }

    reader.close();
  }
);
