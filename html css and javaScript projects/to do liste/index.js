var body = document.getElementsByTagName("body")[0];
var toDoContainer = document.createElement("div");
var toDoHeader = document.createElement("div");
var myH1 = document.createElement("h1");
var toDoList = document.createElement("div");
var taskInput = document.createElement("div");

toDoContainer.setAttribute("class", "todo-container");
toDoHeader.setAttribute("class", "todo-header");
taskInput.setAttribute("class", "taskInput");
myH1.textContent = "To Do Liste";

body.appendChild(toDoContainer);
toDoContainer.appendChild(toDoHeader);
toDoContainer.appendChild(toDoList);
toDoContainer.appendChild(taskInput);
taskInput.appendChild(document.createElement("input"));
taskInput.appendChild(document.createElement("button"));
var addBtn = document.getElementsByClassName("taskInput")[0].getElementsByTagName("button")[0];
addBtn.textContent = "Add";
toDoHeader.appendChild(myH1);

// Style
addBtn.style.width = "70px";
addBtn.style.height = "25px";
addBtn.style.backgroundColor = "aqua";
addBtn.style.color = "white";
addBtn.style.border = "none";
addBtn.style.borderRadius = "4px";

addBtn.onclick = () => {
    var input = document.getElementsByClassName("taskInput")[0].getElementsByTagName("input")[0].value;
    if (input !== "") {
        var toDoListContent =
            `<div class="todo-item">
                <label><input type="checkbox">${input}</label>
                <button class="removeBtn">Remove</button>
            </div>`;
        toDoList.innerHTML += toDoListContent;

        var removeBtns = document.getElementsByClassName("removeBtn");
        for (var i = 0; i < removeBtns.length; i++) {
            removeBtns[i].onclick = function() {
                this.parentNode.remove();
            };
        }
    }
};
