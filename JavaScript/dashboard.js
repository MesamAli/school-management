
let userName = sessionStorage.getItem("USER");
let user = document.querySelector("#user");
user.innerHTML = userName;

let box1 = document.querySelector("#box1");
box1.addEventListener("click", (e) => {
    window.location.href = "../HTML/Profile.html";
    e.preventDefault();
})

let box2 = document.querySelector("#box2");
box2.addEventListener("click", (e) => {
    window.location.href = "../HTML/subjects.html";
    e.preventDefault();
})

let box3 = document.querySelector("#box3");
box3.addEventListener("click", (e) => {
    window.location.href = "../HTML/fee.html";
    e.preventDefault();
})

let box4 = document.querySelector("#box4");
box4.addEventListener("click", (e) => {
    window.location.href = "../HTML/assignments.html";
    e.preventDefault();
})

let box5 = document.querySelector("#box5");
box5.addEventListener("click", (e) => {
    window.location.href = "../HTML/classes.html";
    e.preventDefault();
})

let box6 = document.querySelector("#box6");
box6.addEventListener("click", (e) => {
    window.location.href = "../HTML/attendance.html";
    e.preventDefault();
})