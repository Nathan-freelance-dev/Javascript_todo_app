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
     let session = 'am'

     if(hour === 0) {
          hour = 12
     } if (hour > 12) {
          session = 'pm'
     }

     hour = (hour < 10) ? '0'+ hour : hour;
     min = (min < 10) ? "0" + min : min;


     timeElement.innerHTML = `${hour} : ${min} ${session}`
     setTimeout(function() {
          currentTime
     }, 1000)
}

currentTime()

// submit task function
const taskForm = document.getElementById("taskForm")

taskForm.addEventListener("submit", submitTasks);

// creating delete and done button
const nodeDiv = document.getElementsByClassName('card_footer');

var doneButton = document.createElement('button');
var deleteButton = document.createElement("button");

var doneButtonText = document.createTextNode("Task done.")
var deleteButtonText = document.createTextNode("Delete task.")

doneButton.className = "btn btn-outline-success me-3 done_btn"
deleteButton.className = "btn btn-outline-danger delete_btn"

for (i = 0; i < nodeDiv.length; i ++) {
     doneButton.appendChild(doneButtonText)
     deleteButton.appendChild(deleteButtonText)

     nodeDiv[i].append(doneButton, deleteButton);
}

// set task to be completed

var taskDoneButton = document.getElementsByClassName("done_btn")

// delete button 

var deleteTaskButton = document.getElementsByClassName("delete_btn");

function submitTasks(e) {
     e.preventDefault();

     const taskNameValue = document.getElementById("taskName").value
     const taskDescriptionValue = document.getElementById("taskDescription").value

     if ((taskNameValue && taskDescriptionValue).length >= 1) {
          alert('Your task has been added')
     }

     var listRow = document.getElementById("listRow");
     var colSystem = document.createElement('div');

     var task_description_container = document.createElement('div')

     var taskNameHead = document.createElement("h2");
     var taskDescriptionContainer = document.createElement("p");

     var doneButton = document.createElement('button');
     var deleteButton = document.createElement("button");

     var doneButtonText = document.createTextNode("Task done.")
     var deleteButtonText = document.createTextNode("Delete task.")

     colSystem.className = "col-md-4 m-3 bg-white shadow p-4 rounded rounded-3 task_card";

     taskNameHead.className = "text-dark border-bottom";
     taskDescriptionContainer.className = "text-muted";

     listRow.appendChild(colSystem);

     colSystem.append(task_description_container, taskNameHead, taskDescriptionContainer, doneButton, deleteButton);

     taskNameHead.innerHTML = taskNameValue;
     taskDescriptionContainer.innerHTML = taskDescriptionValue;


     document.getElementById("taskName").value = ''
     document.getElementById("taskDescription").value = ''


     doneButton.className = "btn btn-outline-success me-3 done_btn"
     deleteButton.className = "btn btn-outline-danger delete_btn"

     doneButton.appendChild(doneButtonText)
     deleteButton.appendChild(deleteButtonText)


     for (i = 0; i < taskDoneButton.length; i++) {
          taskDoneButton[i].onclick = function() {
               var parentContainer = this.parentElement;

               parentContainer.classList.add("done")
          }
     }

     for (i = 0; i < deleteTaskButton.length; i++) {
          deleteTaskButton[i].onclick = function() {
               var parentContainer = this.parentElement;

               let confirmMessage = confirm("Are you sure you want to delete this task?")

               if(confirmMessage === true) {
                    parentContainer.classList.add("d-none");
               }

          }
     }
}