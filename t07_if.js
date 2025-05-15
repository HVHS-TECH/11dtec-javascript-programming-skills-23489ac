/******************************
 Name of task:
******************************/
console.log("runing T1-intro.js");

//Variables
name = prompt("What is your name?");
age = Number(prompt("How old are you?"));
money = Number(prompt("How much pocket money do you have?"));
year = 2025;
birthYear = year - age;



/******************************
 Main codecode
******************************/
if (money >= 4) {
  alert("Hi " + name + "\nYou were born in " + birthYear +
        "\nYou have $" + money +
        "\nYou CAN buy a chocolate bar!");
} else {
  alert("Hi " + name + "\nYou were born in " + birthYear +
        "\nYou have $" + money +
        "\nSorry, you CAN'T buy a chocolate bar.");
}

/******************************
 Functions
******************************/
