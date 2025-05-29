/*******Variables*******/
var userName;
var userHeight;
var userreply = true;

/********Main code*******/
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

//create function to get the users name 
function getUserName() {
   //loop while userReply invalid
   while (useReply ){
    userName = propmt("What is your name?");
    //check if the user has clicked cancel
    if( username == null){
        return;//exit this function
    }
    if (!isNaN(username) || userName ==""){
        alert("Invalid Name - please enter a valid Name")
    } else {
        userReply = false;
    }
    }
   }


