

let studentPersonalDB = [
	{ name: "Bilal Khalil Khankhail", fatherName: "Muhammad Khalil", 
	  email: "bilalmkhalil255@gmail.com", number: "0313-2057376",
	  address: "House No. A-265, Block A, Baldia Town, Karachi" },
	{ name: "Muhammad Bilal", fatherName: "Abdul Sattar",
	  email: "mohammadbiilal903@gmail.com", number: "0316-3596302",
	  address: "DHA Phase 7 Extension" },
	{ name: "Mesam Zafar Zardari", fatherName: " Zafar Hussain Zardari",
	  email: "mzzali72@gmail.com", number: "0309-2896853",
	  address: "House No G-35 7/8 Steel Town, Karachi" }
]

let studentUniversityDB = [
	{ profilePic: "../Pictures/bilal.jpg", rollNo: "CS201178", 
	  uniEmail: "CS201178@dsu.edu.pk", section: "1D2",
	  semester: "Fall", academicYear: "2020" },
	{ profilePic: "../Pictures/mbilal.jpg", rollNo: "CS201196", 
	  uniEmail: "CS201196@dsu.edu.pk", section: "1D2",
	  semester: "Fall", academicYear: "2020" },
	{ profilePic: "../Pictures/mesam.jpg", rollNo: "CS201190", 
	  uniEmail: "CS201190@dsu.edu.pk", section: "1D2",
	  semester: "Fall", academicYear: "2020" }
]

let loginDB = [
	{username: "bilal", password: "12345"},
	{username: "mbilal", password: "12345"},
	{username: "mesam", password: "12345"}
]

for (let index = 0; index < loginDB.length; index++) {
	// User Credential
	if (sessionStorage.getItem("PASSWORD") === null) {
		sessionStorage.setItem("PASSWORD", loginDB[index].password);
	}
}


let login_button = document.querySelector("#loginButton");

login_button.addEventListener("click", (e) => {

	let username = document.querySelector("#username").value;
	let password = document.querySelector("#password").value;

	for(let index = 0; index < loginDB.length; index++) {
		if ( username === loginDB[index].username && password === sessionStorage.getItem("PASSWORD") ) {
			window.location.href = "HTML/StudentDashboard.html";
			sessionStorage.setItem("USER",studentPersonalDB[index].name);

			// Personal Information
			sessionStorage.setItem("PNAME", studentPersonalDB[index].name);
			sessionStorage.setItem("PFNAME", studentPersonalDB[index].fatherName);
			sessionStorage.setItem("PEMAIL", studentPersonalDB[index].email);
			sessionStorage.setItem("PNUMBER", studentPersonalDB[index].number);
			sessionStorage.setItem("ADDRESS", studentPersonalDB[index].address);

			// Uinversity Information
			sessionStorage.setItem("PROPIC", studentUniversityDB[index].profilePic);
			sessionStorage.setItem("ROLLNO", studentUniversityDB[index].rollNo);
			sessionStorage.setItem("UMAIL", studentUniversityDB[index].uniEmail);
			sessionStorage.setItem("SECTION", studentUniversityDB[index].section);
			sessionStorage.setItem("SEMESTER", studentUniversityDB[index].semester);
			sessionStorage.setItem("AYEAR", studentUniversityDB[index].academicYear);
		} else {
			let warning = document.querySelector("#warning");
			warning.innerHTML = "Please enter correct Credential";
			warning.style.color = "rgb(224 18 37)";
			warning.style.textAlign = "center";
		}
	}

	e.preventDefault();
});

