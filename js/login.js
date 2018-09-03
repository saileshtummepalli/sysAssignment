
var dummyEmail = "sailesh@gmail.com";
var dummyPassword = "123456";
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username.length > 0 && password.length > 0){

        if(username === dummyEmail && password === dummyPassword){
            alert("Logged in successfully");
        }
        else{
            var userNameArr = username.split("@");
            if(userNameArr.length < 2 ){
                alert("Invalid Email format");
                return false;
            }
            var enteredUserName = userNameArr[0];
            var enteredDomain = userNameArr[1];
            alert
            if(checkForPreviousAttempts(enteredUserName,enteredDomain)){
                alert("Fraud User, Same username with different domain");
            }
            else{
                sessionStorage.setItem("failedLogin", "true");
                var failedUserObject = { username: enteredUserName, domain: enteredDomain };
                sessionStorage.setItem("failedUserDetails", JSON.stringify(failedUserObject));
                alert("Invalid UserName and Password");
            }
        }
    }
    else{
        alert("Username and Password cannot be empty");
    }
}
function checkForPreviousAttempts(username, domain){
    var isFailedPreviously = sessionStorage.getItem("failedLogin");
    if(isFailedPreviously == "true"){
        var userObjString = sessionStorage.getItem("failedUserDetails");
        var userObj = JSON.parse(userObjString);
        if(userObj.username === username && userObj.domain !== domain){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}