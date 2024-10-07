if (localStorage.getItem("fullname")) {
	console.log("fullname is defined.")
} else {
	console.log("fullname is not defined.")
}
if (localStorage.getItem("fullname") == undefined) {
	console.log("Awaiting log in.")
} else {
	console.log("Already logged in. Switching to hours screen.")
    self.location = "index.html"
}
if (localStorage.getItem("teachername")) {
    console.log("teachername is defined.")
} else {
    console.log("teachername is undefined.")
}
if (localStorage.getItem("teachername") == undefined) {
    console.log("Awaiting log in.")
} else {
    console.log("Instructor logged in. Switching to instructor page.")
    self.location = "teacherindex.html"
}

// run whenDonePressed() when it is clicked, essentially does the same thing as onclick=“whenDonePressed()” in the HTML
function clickSubmit() {
    //add code here to manage whatever needs to be managed in the JS, saving info, etc
    let members = ["Owen Bryant","Ross Taylor",""];
    let instructors = ["Jessica Wash", "Phil Tran", ""]
    let firstname =  document.getElementById("firstname").value
    firstname = firstname[0].toUpperCase() + firstname.substring(1);
    let lastname =  document.getElementById("lastname").value
    lastname = lastname[0].toUpperCase() + lastname.substring(1);
    let fullname = firstname + " " + lastname
    if (members.includes(fullname)) {
        //and then switch page
        localStorage.setItem("fullname", fullname)
        self.location = "index.html";  //or whichever file comes next
    } else if (instructors.includes(fullname)) {
        localStorage.setItem("teachername", fullname)
        self.location = "teacherindex.html";  //or whichever file comes next
    } else {
        alert("Sorry, " + fullname + ", you are not currently registered on the team 4405 robotics team. Please try again once you have registered.")
    }
}