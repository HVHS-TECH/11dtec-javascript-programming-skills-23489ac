/*******Variables******/
var userName;
var userHeight;
var userReply = true;

 /********Main codecode*******/
function start() {
    getUserName();
    //check if the user has clicked cancel
    if (userName == null){
        //end the program
        return;
 }
    getUserHeight();
}
/*****Functions************/

//creates function to get the users name
function getUserName(){
 //lop while userReply invaild
while(userReply){
     while(userReply){
         userName = prompt("What is your name?");
    //check if the user has clicked cancel
    if (userName ==null){
        return;//exit this function
    }
    if (!isNaN(userName) || userName ==""){
        alert("Invailid Name - please enter a vaild name")
    }else{
        userRelpy = false;
    
    }    
}
   
    } 
    
