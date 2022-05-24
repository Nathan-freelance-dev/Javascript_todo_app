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

// submit task function
const taskForm = document.getElementById("taskForm")

taskForm.addEventListener("submit", submitTasks);

// creating delete and done button
const nodeDiv = document.getElementsByClassName('card_footer');

for (i = 0; i < nodeDiv.length; i ++) {
     var doneButton = document.createElement('button');
     var deleteButton = document.createElement("button");

     var doneButtonText = document.createTextNode("Task done.")
     var deleteButtonText = document.createTextNode("Delete task.")

     doneButton.className = "btn btn-outline-success me-3 done_btn"
     deleteButton.className = "btn btn-outline-danger delete_btn"

     doneButton.appendChild(doneButtonText)
     deleteButton.appendChild(deleteButtonText)

     nodeDiv[i].append(doneButton, deleteButton);
}

// set task to be completed

var doneButton = document.getElementsByClassName("done_btn")

for (i = 0; i < close.length; i++) {
     doneButton[i].onclick = function() {
          var div = this.parentElement;
          div.classList.add("border-top", "border-success", "border-top-3");
     }
}


function submitTasks(e) {
     e.preventDefault();

     const taskNameValue = document.getElementById("taskName").value
     const taskDescriptionValue = document.getElementById("taskDescription").value

     var listRow = document.getElementById("listRow");
     var colSystem = document.createElement('div');

     var task_description_container = document.createElement('div')
     var task_description_container_footer = document.createElement('div')

     var taskNameHead = document.createElement("h2");
     var taskDescriptionContainer = document.createElement("p");

     colSystem.className = "col-md-4 mt-3";
     task_description_container.className = "bg-white shadow p-4 pb-0 rounded rounded-3 task_card";
     task_description_container_footer.className = "p-3 border-top card_footer text-end";

     taskNameHead.className = "text-dark border-bottom";
     taskDescriptionContainer.className = "text-muted";

     listRow.appendChild(colSystem);

     colSystem.appendChild(task_description_container);

     task_description_container.append(taskNameHead, taskDescriptionContainer, task_description_container_footer);

     taskNameHead.innerHTML = taskNameValue;
     taskDescriptionContainer.innerHTML = taskDescriptionValue;


     document.getElementById("taskName").value = ''
     document.getElementById("taskDescription").value = ''



     var doneButton = document.createElement('button');
     var deleteButton = document.createElement("button");

     var doneButtonText = document.createTextNode("Task done.")
     var deleteButtonText = document.createTextNode("Delete task.")

     doneButton.className = "btn btn-outline-success me-3 done_btn"
     deleteButton.className = "btn btn-outline-danger delete_btn"

     doneButton.appendChild(doneButtonText)
     deleteButton.appendChild(deleteButtonText)

     task_description_container_footer.append(doneButton, deleteButton);


     for (i = 0; i < close.length; i++) {
          doneButton[i].onclick = function() {
               var div = this.parentElement;
               div.classList.add("border-top", "border-success", "border-top-3");
          }
     }
}