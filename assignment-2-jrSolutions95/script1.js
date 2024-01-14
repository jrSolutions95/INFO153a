const menuIcon = document.getElementById("menu-icon");
const taskFilter = document.getElementById("search-box");
const taskList = document.getElementById("task-list");
const collapsed = document.getElementById("collapsed");
const expanded = document.getElementById("expanded");
const cancelButton = document.getElementById("cancel-button");
const taskNameInput = document.getElementById("taskname");
const addButton = document.getElementById("add-button");
const expandedInput = document.getElementById("taskname");
let currentTaskEditMode = false;
let exp = false;

let originalTaskValue = "";
let originalTaskElement = null; // Add this to the top of your script



/* Keeps the last li-element without a bottom border */
function updateLastTaskBorder() {
    const tasks = taskList.querySelectorAll('li');
    let lastVisibleTask = null;

    tasks.forEach(task => {
        if (task.style.display !== "none") {
            if (lastVisibleTask) {
                lastVisibleTask.style.borderBottom = "1px solid #e5e5e5";
            }
            lastVisibleTask = task;
        }
    });

    if (lastVisibleTask) {
        lastVisibleTask.style.borderBottom = "none";
    }
}
/* Filters task based on user input in Quick find, based on the solution we made in Shopping-list project */
function filterTasks(e){
    const tasks = taskList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    tasks.forEach(task => {
        const taskName = task.lastChild.textContent.toLowerCase();

        if(taskName.indexOf(text) != -1){
            task.style.display = "list-item";
        } else {
            task.style.display = "none";
        }
    });
    updateLastTaskBorder();
}
/* Toggles the viibility of the side navigation */
function toggleNavVisibility() {
    const navbar = document.querySelector("nav");
    const contentGrid = document.querySelector(".content-grid");
    
    navbar.classList.toggle("active");
    contentGrid.classList.toggle("nav-active", navbar.classList.contains("active"));
}
/* Loads tasks from storage and displays them if they have not been completed */
function displayTasks(){
    const tasksFromStorage = getTasksFromStorage();
    const incompleteTasks = tasksFromStorage.filter(task => task.completed === false);
    incompleteTasks.forEach(task => {
        addTaskToDom(task.text, task.timestamp);
    });
    updateTaskCount();
}

/* Adds task both to dom and storage, checks if the task is empty, then gives the user a visual clue that will not work (used instead of alert) */
/* function addTask(){
    const newTask = taskNameInput.value;
    if(newTask === ""){
        taskNameInput.classList.add("shake");//source: https://www.dayaweb.com/blog/css-text-animation-shake/
        taskNameInput.addEventListener("animationend", () => {
            taskNameInput.classList.remove("shake");
        });
        taskNameInput.focus();
        return
    }
    const timestamp = new Date().toISOString();
    addTaskToDom(newTask, timestamp);
    addTaskToStorage(newTask, timestamp);
    taskNameInput.value = "";
}  */

/* function addTask() {
    const newTask = taskNameInput.value;

    if (newTask === "") {
        taskNameInput.classList.add("shake");
        taskNameInput.addEventListener("animationend", () => {
            taskNameInput.classList.remove("shake");
        });
        taskNameInput.focus();
        return;
    }

    // Check if originalTaskElement exists and update its content
    if (originalTaskElement) {
        const originalTimestamp = originalTaskElement.getAttribute('data-timestamp');
        updateTaskInStorage(originalTimestamp, newTask);
        addTaskToDom(newTask, originalTimestamp);
        originalTaskElement = null; // reset the reference
    } else {
        const timestamp = new Date().toISOString();
        addTaskToDom(newTask, timestamp);
        addTaskToStorage(newTask, timestamp);
    }

    taskNameInput.value = "";
} */

function addTask(validateInput = true){
    const newTask = taskNameInput.value;
    if(originalTaskElement){
        const originalTimestamp = originalTaskElement.getAttribute('data-timestamp');
        updateTaskInStorage(originalTimestamp, newTask);
        addTaskToDom(newTask, originalTimestamp);
        originalTaskElement = null; // reset the reference
        taskNameInput.value = "";
    } else {
        console.log("addTask function called");
        if (newTask === ""&&validateInput) {
            if(exp === true) {
                taskNameInput.classList.add("shake");
                taskNameInput.addEventListener("animationend", () => {
                    taskNameInput.classList.remove("shake");
                });
                taskNameInput.focus();
            }
            return; // Crucial to stop further code execution if task is empty
        }
    
        const timestamp = new Date().toISOString();
        addTaskToDom(newTask, timestamp);
        addTaskToStorage(newTask, timestamp);
        taskNameInput.value = "";
    }
    
}

function updateTaskInStorage(originalTimestamp, newTaskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = tasks.findIndex(task => task.timestamp === originalTimestamp);
    if (index !== -1) {
        tasks[index].text = newTaskText;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}





function addTaskToDom(taskText,timestamp){
    const li = createTask(taskText,timestamp);
    taskList.appendChild(li);
    updateLastTaskBorder();
}

/* Creates a task with neccisary attributes, tabindex is needed for focusout */
function createTask(taskText,timestamp){
    const li = document.createElement("li");
    li.setAttribute("tabindex", "0");
    li.setAttribute("data-timestamp",timestamp);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));
    return li;
}

function expandAddTask(){
    exp = true;
    collapsed.style.display = "none";
    expanded.style.display = "flex";
    taskNameInput.focus();

}

function getTasksFromStorage(){
    let tasksFromStorage;

    if(localStorage.getItem("tasks") === null){//no tasks in localStorage
        tasksFromStorage = [];
    } else {//there is at least one tasks in localStorage
        tasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
    }
    return tasksFromStorage;
}
/* Handles clicks on existing tasks */
function onTaskClick(e){
    if(e.target.type === "checkbox"){
        completeTask(e.target.parentElement);
    } else if(e.target.tagName === "LI"){
        currentTaskEditMode = true;
        editTask(e.target);
    }
        
} 

function editTask(task){
    console.log(task.getAttribute('data-timestamp'));
    //burde kanskje lagre timestamp så kan vi bruke denne til å finne riktig å fjerne fra localstorage
    originalTaskElement = task;
    //denne delen skjer når det allede finnes en verdi i input feltet
    if (taskNameInput.value !== "") {//this saves the thing in the input field!
        const taskTimestamp = new Date().toISOString();
        addTaskToDom(taskNameInput.value, taskTimestamp);
        addTaskToStorage(taskNameInput.value, taskTimestamp);
        taskNameInput.value = "";
    }
    
    const taskText = task.textContent.trim();
    expandAddTask();
    taskNameInput.value = taskText;
    taskNameInput.focus();
    removeTaskDom(task);//this is correct i think
    //removeTaskFromStorage(task);//should be updatetaskfromStorage
}

function cancel(){
    console.log("cancel function called");
    if(currentTaskEditMode){
        if (originalTaskElement) {// if there is a reference to the original task
            addTaskToDom(originalTaskElement.textContent, originalTaskElement.getAttribute('data-timestamp')); // restore the original task to the DOM
            originalTaskElement = null; // reset the reference
        }
        collapseAddTask();
    } else{
        collapseAddTask();
    }
}
/* function collapseAddTask(){
    if(currentTaskEditMode){
        //this needs to be fixed
        if (originalTaskElement) {// if there is a reference to the original task
            addTaskToDom(originalTaskElement.textContent, originalTaskElement.getAttribute('data-timestamp')); // restore the original task to the DOM
            //taskList.appendChild(originalTaskElement); // restore the original task this, should maybe update the task instead of removing and adding
            originalTaskElement = null; // reset the reference
        }
        collapsed.style.display = "flex";
        expanded.style.display = "none";
        taskNameInput.value = "";
        currentTaskEditMode = false;
    } else {
        collapsed.style.display = "flex";
        expanded.style.display = "none";
        taskNameInput.value = "";
    }
} */

function collapseAddTask(){
    exp = false;
    collapsed.style.display = "flex";
    expanded.style.display = "none";
    taskNameInput.value = "";
}


function removeTaskDom(taskElement){
    taskElement.remove();
}

function addTaskToStorage(task,timestamp){
    const tasksFromStorage = getTasksFromStorage();
    console.log("Before Adding:", tasksFromStorage);
    const taskObject = {
        text: task,
        completed: false,
        timestamp: timestamp
    }
    tasksFromStorage.push(taskObject);
    console.log("After Adding:", tasksFromStorage);
    localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
    updateTaskCount();
}

function removeTaskFromStorage(task){
    const taskTimestamp = task.getAttribute('data-timestamp');
    let tasksFromStorage = getTasksFromStorage();
    console.log("Before Removing:", tasksFromStorage);
    tasksFromStorage = tasksFromStorage.filter(i => i.timestamp !== taskTimestamp);
    console.log("After Removing:", tasksFromStorage);
    localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
    updateTaskCount();
}
/* Completes the correct task: Where the timestamp matches, and updates the localstorge */
function completeTask(taskElement){
    const taskTimestamp = taskElement.getAttribute('data-timestamp');
    const tasksFromStorage = getTasksFromStorage();
    tasksFromStorage.forEach(task => {
        if(task.timestamp === taskTimestamp){
            task.completed = true;
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
    updateTaskCount();
    removeTaskDom(taskElement);
    updateLastTaskBorder();
}

function updateTaskCount(){
    const tasksFromStorage = getTasksFromStorage();
    const totalTasks = tasksFromStorage.length;
    const incompleteTasks = tasksFromStorage.filter(task => task.completed === false).length;
    const taskCountElement = document.getElementById("date-text");
    const taskInboxElement = document.getElementById("task-inbox-count");
    taskCountElement.textContent = `${totalTasks}/${incompleteTasks}`;
    taskInboxElement.textContent = incompleteTasks;
}
/* Handles the focusout of expandedInput, was neccicary because cancel button has two operations based on currentTaskEditmode */
function handleFocusOut(e) {
    if (e.relatedTarget === cancelButton) {
        cancel();
    } else if (taskList.contains(e.relatedTarget) && e.relatedTarget.tagName === 'LI') {
        expandedInput.focus();
    } else if(e.relatedTarget === addButton){
        addTask();
        //collapseAddTask();
    } else{
        console.log("focusout i elsen");
        addTask();
        collapseAddTask();
    }
}

/* Init */
function init(){
    menuIcon.addEventListener("click", toggleNavVisibility);
    taskFilter.addEventListener("input", filterTasks);
    collapsed.addEventListener("click", expandAddTask);
    cancelButton.addEventListener("click", cancel);
    //addButton.addEventListener("click", addTask);
    taskList.addEventListener("click", onTaskClick);
    document.addEventListener("DOMContentLoaded", displayTasks);
    expandedInput.addEventListener("focusout", handleFocusOut);
}
init();

