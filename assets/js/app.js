// date implementation into header

const d = new Date();
const dateElement = document.getElementById("date_element");

const months = [
     "January",
     "Febuary",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December"
];

let month = months[d.getMonth()];
let day = d.getDay();
let year = d.getFullYear();

dateElement.innerText = `${day} ${month}, ${year}`;

// time implementation into header

const timeElement = document.getElementById("time_element");

function currentTime() {
     let hour = d.getHours();
     let min = d.getMinutes();
     let session = 'AM'

     if(hour === 0) {
          hour = 12
     } if (hour > 12) {
          session = 'PM'
     }

     hour = (hour < 10) ? '0'+ hour : hour;
     min = (min < 10) ? "0" + min : min;


     timeElement.innerHTML = `${hour} : ${min} ${session}`
     let updateTime = setTimeout(function() {
          currentTime
     }, 1000)
}

currentTime()

// click on button to show instruction function

const showInstructionButton = document.getElementById("showInstructons");
const alertBox = document.getElementById("alert_box");
const hideInstructionButton = document.getElementById('closeInstructions');

// show instructions on button click

showInstructionButton.addEventListener('click', showInstruction);

function showInstruction() {
     alertBox.classList.add("show");
}

// hide instructions on button click

hideInstructionButton.addEventListener("click", hideInstruction);

function hideInstruction() {
     alertBox.classList.remove("show");
}

// click to show input fields for adding task
const addTaskBtn = document.getElementById("addTask");
const inputBox = document.getElementById("input_box");

addTaskBtn.addEventListener('click', ()=> {
     inputBox.classList.toggle("show_box")
})

// adding task to table when button is clicked

const submitButton = document.getElementById('submit_button');

submitButton.addEventListener("click", addTaskName);

const tabelBody = document.getElementById("tabel_body");
var nameElement = document.createElement("tr");
var taskName = document.getElementById('taskName').value;
var taskTime = document.getElementById('taskTime').value;
var taskDate = document.getElementById('taskDate').value;
var taskNameText = document.createTextNode(taskName);
nameElement.appendChild(taskNameText)
const alertMessage = document.getElementById("alert"); 

function addTaskName() {
     tabelBody.appendChild(nameElement);
}

// function checkValidaton() {
//      if (taskName && taskTime && taskDate === '') {
//           alertMessage.innerHTML = "You did not enter a task";
//           alertMessage.classList.remove("d-none");
//           alertMessage.classList.add("alert-danger");
//      } else {
//           alertMessage.innerHTML = "Your task was added successfully";
//           alertMessage.classList.remove("d-none");
//           alertMessage.classList.add("alert-success");
//      }
// }
