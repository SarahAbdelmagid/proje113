
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name == "" || message == "") {
        alert("Please fill in the Name and Message fields.");
        return false; 
    } else {
        alert("Thank you " + name + ", your message has been sent!");
        return true; 
    }

}function sayHello() {
    var userName = prompt("What is your name?");

    if (userName) {
        alert("Welcome " + userName + " to my website! 🌸");
    } else {
        alert("Welcome to my website!");
    }
}