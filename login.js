
// run whenDonePressed() when it is clicked, essentially does the same thing as onclick=“whenDonePressed()” in the HTML
function clickSubmit() {
    //add code here to manage whatever needs to be managed in the JS, saving info, etc
    let members = ["Owen Bryant","Ross Taylor",""];
    let firstname =  document.getElementById("firstname").value
    firstname = firstname[0].toUpperCase() + firstname.substring(1);
    let lastname =  document.getElementById("lastname").value
    lastname = lastname[0].toUpperCase() + lastname.substring(1);
    let fullname = firstname + " " + lastname
    if (members.includes(fullname)) {
        //and then switch page
        localStorage.setItem("fullname", fullname)
        self.location = "index.html";  //or whichever file comes next
    } else {
        alert("You are not currently registered on the team 4405 robotics team. Please try again once you have registered.")
    }
}