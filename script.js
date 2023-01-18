const form = document.getElementById("toDoForm");

function submit(event){
    // stops the page from automatically refreshing
    event.preventDefault();

    // the value of the information submitted using the form
    // will be an li LIST item 
    // whose textContent with be VALUE(the text the user typed)
    const value = event.target.newToDo.Value;
    const listItem = document.createElement("li");
    listItem.textContent = value;

    const ul = document.getElementByList("list");

    const itemComplete = document.createElement("input");
    itemComplete.type = "checkbox";
    itemComplete.onclick = function () {
      const completedList = document.getElementById("completed-list");
      this.parentElement.remove();
      completedList.appendChild(listItem);
    };
  
    listItem.appendChild(itemComplete);
  
    const itemDelete = document.createElement("button");
    itemDelete.textContent = "Delete me";
    itemDelete.onclick = function () {
      this.parentElement.remove();
    };
  
    listItem.appendChild(itemDelete);
  
    ul.appendChild(listItem);
}

form.addEventListener("submit", submit)
