// // date implementation into header

// const d = new Date();
// const dateElement = document.getElementById("date_element");

// const months = [
//      "January",
//      "Febuary",
//      "March",
//      "April",
//      "May",
//      "June",
//      "July",
//      "August",
//      "September",
//      "October",
//      "November",
//      "December"
// ];

// let month = months[d.getMonth()];
// let day = d.getDate();
// let year = d.getFullYear();

// dateElement.innerText = `${day} ${month}, ${year}`;

// // submit task function
// const taskForm = document.getElementById("taskForm")

// taskForm.addEventListener("submit", submitTasks);

// // creating delete and done button
// const nodeDiv = document.getElementsByClassName('card_footer');

// var doneButton = document.createElement('button');
// var deleteButton = document.createElement("button");

// var doneButtonText = document.createTextNode("Task done.")
// var deleteButtonText = document.createTextNode("Delete task.")

// doneButton.className = "btn btn-outline-success me-3 done_btn"
// deleteButton.className = "btn btn-outline-danger delete_btn"

// for (i = 0; i < nodeDiv.length; i ++) {
//      doneButton.appendChild(doneButtonText)
//      deleteButton.appendChild(deleteButtonText)

//      nodeDiv[i].append(doneButton, deleteButton);
// }

// // set task to be completed

// var taskDoneButton = document.getElementsByClassName("done_btn")

// // delete button 

// var deleteTaskButton = document.getElementsByClassName("delete_btn");

// function submitTasks(e) {
//      e.preventDefault();

//      const taskNameValue = document.getElementById("taskName").value
//      const taskDescriptionValue = document.getElementById("taskDescription").value

//      const bsAlert = document.getElementById("bsAlert");

//      if ((taskNameValue && taskDescriptionValue).length >= 1) {
//           bsAlert.classList.remove("d-none");
//      }

//      var listRow = document.getElementById("listRow");
//      var colSystem = document.createElement('div');

//      var task_description_container = document.createElement('div')

//      var taskNameHead = document.createElement("h2");
//      var taskDescriptionContainer = document.createElement("p");

//      var doneButton = document.createElement('button');
//      var deleteButton = document.createElement("button");

//      var doneButtonText = document.createTextNode("Task done.")
//      var deleteButtonText = document.createTextNode("Delete task.")

//      colSystem.className = "col-md-4 m-3 bg-white shadow p-4 rounded rounded-3 task_card";

//      taskNameHead.className = "text-dark border-bottom";
//      taskDescriptionContainer.className = "text-muted";

//      listRow.appendChild(colSystem);

//      colSystem.append(task_description_container, taskNameHead, taskDescriptionContainer, doneButton, deleteButton);

//      taskNameHead.innerHTML = taskNameValue;
//      taskDescriptionContainer.innerHTML = taskDescriptionValue;


//      document.getElementById("taskName").value = ''
//      document.getElementById("taskDescription").value = ''


//      doneButton.className = "btn btn-outline-success me-3 done_btn"
//      deleteButton.className = "btn btn-outline-danger delete_btn"

//      doneButton.appendChild(doneButtonText)
//      deleteButton.appendChild(deleteButtonText)


//      for (i = 0; i < taskDoneButton.length; i++) {
//           taskDoneButton[i].onclick = function() {
//                var parentContainer = this.parentElement;

//                parentContainer.classList.add("done")
//           }
//      }

//      for (i = 0; i < deleteTaskButton.length; i++) {
//           deleteTaskButton[i].onclick = function() {
//                var parentContainer = this.parentElement;

//                let confirmMessage = confirm("Are you sure you want to delete this task?")

//                if(confirmMessage === true) {
//                     parentContainer.classList.add("d-none");
//                }

//           }
//      }
// }

// DOM Elements
     const dateDOMElement = document.getElementById("date_element");
     const taskForm = document.getElementById("taskForm");
     const addedTaskRow = document.getElementById("listRow");

     const taskNameInput = taskForm["task_name"];
     const taskDescriptionInput = taskForm["task_description"];

// date element
     const dateFuntion = new Date();
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
     ]

     let month_year = months[dateFuntion.getMonth()];
     let fullYear = dateFuntion.getFullYear();
     let date = dateFuntion.getDate();

     // printing out date into the Dom element

          dateDOMElement.innerHTML = `${date} ${month_year}, ${fullYear}`


// setting up localstorage

     const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

     const addTasks = (taskName, taskDescription) => {
          tasks.push({
               taskName,
               taskDescription
          });

          localStorage.setItem("tasks", JSON.stringify(tasks));

          return { taskName, taskDescription };
     }


// creating the task DOM element

     const createTaskElement = ({taskName, taskDescription}) => {
          // creating the col-md-6 divs
               const taskColDiv = document.createElement("div");
               const taskNameEl = document.createElement("h1");
               const taskDescriptionEl = document.createElement("p");
               const taskDoneBtn = document.createElement("button");
               const taskDeleteBtn = document.createElement("button");

          // adding innerText to created DOM elements
               taskNameEl.innerText = taskName;
               taskDescriptionEl.innerText = taskDescription;

          // adding created DOM elements to main DOM elements
               addedTaskRow.appendChild(taskColDiv);
               taskColDiv.append(taskNameEl, taskDescriptionEl);
     }