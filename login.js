
// run whenDonePressed() when it is clicked, essentially does the same thing as onclick=“whenDonePressed()” in the HTML
document.getElementById("submit").addEventListener("submit", whenDonePressed);

function whenDonePressed() {
    //add code here to manage whatever needs to be managed in the JS, saving info, etc

    //and then switch page
    self.location = "index.html";  //or whichever file comes next
}

function clickSubmit() {
    //add code here to manage whatever needs to be managed in the JS, saving info, etc

    //and then switch page
    self.location = "index.html";  //or whichever file comes next
}