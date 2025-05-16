/******************************
 Name of task:
******************************/
console.log("runing T1-intro.js");

//Variables
function getName() {
  return prompt("What is your name?");
}

function getAge() {
  return Number(prompt("How old are you?"));
}


/******************************
 Main codecode
******************************/
function checkMoney() {
  let money = Number(prompt("How much pocket money do you have?"));
  if (money >= 4) {
    alert("You CAN buy a chocolate bar!");
  } else {
    alert("You CAN'T buy a chocolate bar.");
  }
}

name = getName();
age = getAge();

/******************************
 Functions
******************************/
