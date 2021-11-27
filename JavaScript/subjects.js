

let name = document.querySelector("#name");
name.innerHTML = sessionStorage.getItem("PNAME");

let progressBars = document.querySelectorAll(".subProgress");
let progressPercs = document.querySelectorAll(".perc");

for(let index = 0; index < progressBars.length; index++) {
	let percentage = Math.floor(Math.random() * 100) + "%";
	progressBars[index].style.width = percentage;
	progressPercs[index].innerHTML = percentage;
}
