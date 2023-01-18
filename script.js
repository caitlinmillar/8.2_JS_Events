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
}