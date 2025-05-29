/******************************
 Name of task:
******************************/
console.log("runing T1-intro.js");

//Variables
var userName;
var userHeight;
var userreply = true;

/******************************
 Main codecode
******************************/
function start() {
    getUserName();
    //check if the user has clicked cancel
    if (userName == null){
        //end the program
        return;
    }
    getUserHeight();
}
/***** Functions************/
//creat function to get the users name 
function getUserName(){
    userName = prompt ('What is your name?');
    
}

