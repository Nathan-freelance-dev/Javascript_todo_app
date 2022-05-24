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
     setTimeout(function() {
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

// adding task to table when button is clicked

// creating the delete button for each list item

var myNodelist = document.getElementsByTagName("li")

// loobing through each list

var i;

for (i = 0; i < myNodelist.length; i++) {
     var button = document.createElement("button");
     var buttonText = document.createTextNode("Delete")
     button.classList = 'btn btn-danger ms-auto delete'

     button.appendChild(buttonText);
     myNodelist[i].appendChild(button)
}

// click to delete button
var deleteButton = document.getElementsByClassName("delete")

for (i = 0; i < deleteButton.length; i ++) {
     deleteButton[i].onclick = () => {
          var mylist = this.parentElement;
          mylist.classList.add("d-none")
     }
}


const taskForm = document.getElementById('taskForm');

taskForm.addEventListener("submit", addTaskName);
function addTaskName(e) {
     e.preventDefault();

     var ulElement = document.getElementById('myList');
     var taskElement = document.createElement('li')
     var taskName = document.getElementById('taskName').value;
     var taskNameText = document.createTextNode(taskName);

     taskElement.className = "w-100 border-bottom d-flex align-items-center"
     taskElement.appendChild(taskNameText)
     
     ulElement.appendChild(taskElement)
     
     var button = document.createElement("button");
     var buttonText = document.createTextNode("Delete")
     button.classList = 'btn btn-danger ms-auto delete'

     button.appendChild(buttonText);
     taskElement.appendChild(button)

     for (i = 0; i < deleteButton.length; i ++) {
          deleteButton[i].onclick = () => {
               var mylist = this.parentElement;
               mylist.classList.add("d-none")
          }
     }
}
