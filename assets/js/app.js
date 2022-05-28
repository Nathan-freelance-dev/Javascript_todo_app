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
               const taskNameEl = document.createElement("h3");
               const taskDescriptionEl = document.createElement("p");

          // adding innerText to created DOM elements
               taskNameEl.innerText = taskName;
               taskDescriptionEl.innerText = taskDescription;

          // adding created DOM elements to main DOM elements
               addedTaskRow.appendChild(taskColDiv);
               taskColDiv.append(taskNameEl, taskDescriptionEl);

          // adding className to each of the created DOM elements
               taskColDiv.className = "p-4 rounded border rounded-3";
               taskNameEl.className = "text-dark border-bottom pb-2 fw-bold";
               taskDescriptionEl.className = "mt-3 text-muted";
     };

tasks.forEach(createTaskElement);

// taskform onsubmit function
     taskForm.onsubmit = e => {
          e.preventDefault();

          const newTask = addTasks(
               taskNameInput.value,
               taskDescriptionInput.value
          );

          createTaskElement(newTask);

          taskNameInput.value = "";
          taskDescriptionInput.value = "";
     };