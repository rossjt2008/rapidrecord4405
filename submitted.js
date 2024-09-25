var previoushours = 8;
var totalhours = 7;
var newhours = previoushours + totalhours;
newHours(newhours);
function newHours(newhours) {
document.getElementById("hours").textContent = newhours + " hours"
}
// run whenDonePressed() when it is clicked, essentially does the same thing as onclick=“whenDonePressed()” in the HTML
document.getElementById("done").addEventListener("click", whenDonePressed);

function whenDonePressed() {
    //add code here to manage whatever needs to be managed in the JS, saving info, etc

    //and then switch page
    self.location = "login.html";  //or whichever file comes next
}