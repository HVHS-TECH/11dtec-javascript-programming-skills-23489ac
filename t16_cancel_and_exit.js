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
functionstart() {
    getUserName();
    //check if the user has clicked cancel
    if (userName == null){
        //end the program
        return;
    }
    getUserHeight();
}
/******************************
 Functions
******************************/
