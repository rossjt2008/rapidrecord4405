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
    let members = ["Owen Bryant","Ross Taylor","John Doe","Jane Doe","Jim Himbledorf"];
    let instructors = ["Jessica Wash", "Phil Tran", "Professor Admin"]
    let firstname =  document.getElementById("firstname").value
    if (firstname == "")  {
        alert("One of the input boxes is blank. Make sure you have typed your first and last name and try again.")
        return
    } else {
        console.log("firstname is defined")
    }
    firstname = firstname[0].toUpperCase() + firstname.substring(1);
    let lastname =  document.getElementById("lastname").value
    if (lastname == "")  {
        alert("One of the input boxes is blank. Make sure you have typed your first and last name and try again.")
        return
    } else {
        console.log("lastname is defined")
    }
    lastname = lastname[0].toUpperCase() + lastname.substring(1);
    let fullname = firstname + " " + lastname
    determine_user(fullname);
    /*if (members.includes(fullname)) {
        //and then switch page
        localStorage.setItem("fullname", fullname)
        self.location = "index.html";  //or whichever file comes next
    } else if (instructors.includes(fullname)) {
        localStorage.setItem("teachername", fullname)
        self.location = "teacherindex.html";  //or whichever file comes next
    } else {
        alert("Sorry, " + fullname + ", you are not currently registered on the 4405 robotics team. Please try again once you have registered.")
    }*/
}

function determine_user(fullname) {
    fetch(`does_da_user_exist.php?name=${fullname}&num=` + Math.random())
        .then(response => response.text())
        .then((txt) => {
            if (txt != "FAILURE") {
                if (txt == "1") {
                    localStorage.setItem("teachername", fullname)
                    self.location = "teacherindex.html";  //or whichever file comes next
                } else {
                    localStorage.setItem("fullname", fullname)
                    self.location = "index.html";  //or whichever file comes next
                }
            } else {
                alert("NUH-UH, YOU AIN'T ALLOW IN THESE PARTS, COWBOY")
            }
        })
}