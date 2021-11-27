let profilPic = document.querySelector("#proPic");
let stuName = document.querySelector("#stuName");
let stuRollNo = document.querySelector("#stuRollNo");
let stuUniEmail = document.querySelector("#stuUniEmail");
let stuSection = document.querySelector("#stuSection");
let stuSemester = document.querySelector("#stuSemester");
let stuAYear = document.querySelector("#stuAYear");
let address = document.querySelector("#address");

let pName = document.querySelector("#pName");
let pFName = document.querySelector("#pFName");
let pEmail = document.querySelector("#pEmail");
let pContact = document.querySelector("#pContact");

profilPic.src = sessionStorage.getItem("PROPIC");
stuName.innerHTML = sessionStorage.getItem("PNAME");
stuRollNo.innerHTML = sessionStorage.getItem("ROLLNO");
stuUniEmail.innerHTML = sessionStorage.getItem("UMAIL");
stuSection.innerHTML = sessionStorage.getItem("SECTION");
stuSemester.innerHTML = sessionStorage.getItem("SEMESTER");
stuAYear.innerHTML = sessionStorage.getItem("AYEAR");

pName.innerHTML = sessionStorage.getItem("PNAME");
pFName.innerHTML = sessionStorage.getItem("PFNAME");
pEmail.innerHTML = sessionStorage.getItem("PEMAIL");
pContact.innerHTML = sessionStorage.getItem("PNUMBER");
address.innerHTML = sessionStorage.getItem("ADDRESS");

let progressBars = document.querySelectorAll(".progress");

for(let index = 0; index < progressBars.length; index++) {
	progressBars[index].style.width = Math.floor(Math.random() * 100) + "%";
}


let changeStatus = document.querySelector("#changeStatus");
let setButton = document.querySelector("#set");

setButton.addEventListener("click", (e) => {
	let oldPassword = document.querySelector("#oldPassword").value;
	let newPassword = document.querySelector("#newPassword").value;
	let renewPassword = document.querySelector("#renewPassword").value;

	if ( oldPassword === sessionStorage.getItem("PASSWORD") ) {
		if ( newPassword === renewPassword ) {
			sessionStorage.setItem("PASSWORD", newPassword);
			changeStatus.innerHTML = "set!";
		} else {
			changeStatus.innerHTML = "New Pasword and Re-Enter New Password field should be same.";
		}
	} else {
		changeStatus.innerHTML = "Pasword is incorrect!";
	}
	e.preventDefault();
});