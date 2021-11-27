

let name = document.querySelector("#name");
name.innerHTML = sessionStorage.getItem("PNAME");

let assignments = document.querySelectorAll(".assignment");
let course = document.querySelectorAll(".course");
let date = document.querySelectorAll(".date");

let assignmentSubjects = document.querySelectorAll(".assgnNum");


assignList = [
	{assignment: "Array and Pointers", course: "Programming Fundamental", date: "25 Jan"},
	{assignment: "C Memory Addresses", course: "Programming Fundamental", date: "19 Jan"},
	{assignment: "Functions", course: "Programming Fundamental Lab", date: "18 Jan"},
	{assignment: "Conditions", course: "Programming Fundamental Lab", date: "15 Jan"},
	{assignment: "Logic Gates", course: "Introduction to Information and Technology", date: "10 Jan"},
	{assignment: "Computer Number System", course: "Introduction to Information and Technology", date: "9 Jan"},
	{assignment: "HTML, CSS & JAVASCRIPT", course: "Introduction to Information and Technology Lab", date: "6 Jan"},
	{assignment: "MS EXEL & POWERPOINT", course: "Introduction to Information and Technology Lab", date: "13 Jan"},
	{assignment: "Gauss's Law", course: "Applied Physics", date: "14 Jan"},
	{assignment: "Coloumb's Law", course: "Applied Physics", date: "28 Jan"},
	{assignment: "Limits", course: "Calculus and Analytical Geometry", date: "3 Jan"},
	{assignment: "Differentiation", course: "Calculus and Analytical Geometry", date: "1 Jan"},
	{assignment: "The Covid-19 Essay", course: "English Composition and Comprehension", date: "7 Jan"},
]



for (let index = 0; index < 6; index++) {
	let num = Math.floor(Math.random() * 13);
	assignments[index].innerHTML = assignList[num].assignment;
	course[index].innerHTML = assignList[num].course;
	date[index].innerHTML = assignList[num].date;
}

for (let index = 0; index < assignmentSubjects.length; index++) {
	assignmentSubjects[index].innerHTML = Math.floor(Math.random() * 8);
}