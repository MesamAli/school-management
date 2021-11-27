
let titlename = document.querySelector("#name");
let name = document.querySelector("#pname");
let fname = document.querySelector("#fname");
let address = document.querySelector("#address");
let semester = document.querySelector("#semester");

titlename.innerHTML = sessionStorage.getItem("USER");
name.innerHTML = sessionStorage.getItem("USER");
fname.innerHTML = sessionStorage.getItem("PFNAME");
address.innerHTML = sessionStorage.getItem("ADDRESS");
semester.innerHTML = sessionStorage.getItem("SEMESTER");


let paidDue	 = document.querySelectorAll(".paidDue");
let subj = document.querySelectorAll(".for");
let date = document.querySelectorAll(".date");


data = [
	{name: "Security Deposit", status: "Paid"},
	{name: "Finals", status: "Due"},
	{name: "Mid-Terms", status: "Due"},
	{name: "Sports", status: "Paid"},
	{name: "Fines", status: "Due"},
	{name: "Extra Curricular Acitvities", status: "Paid"},
]



for (let index = 0; index < data.length; index++) {
	let num = Math.floor(Math.random() * data.length);
	subj[index].innerHTML = data[num].name;
	paidDue[index].innerHTML = data[num].status;
}

let statusForm = document.querySelector("#statusForm");
let gen = document.querySelector("#gen");

let billNo = document.querySelector("#billNo");
let receiptName = document.querySelector("#receiptName");
let regNo = document.querySelector("#regNo");
let issueDate = document.querySelector("#issueDate");

function dateFN() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd;
	} 
	if(mm<10) {
	    mm='0'+mm;
	}

	return today = mm+'-'+dd+'-'+yyyy;
}


gen.addEventListener("click", (e) => {
	receiptName.innerHTML = sessionStorage.getItem("USER");
	billNo.innerHTML = 6000 + Math.floor(Math.random() * 500);
	regNo.innerHTML = 20000000 + Math.floor(Math.random() * 10000);
	issueDate.innerHTML = dateFN();

	statusForm.style.display = "block";
});
