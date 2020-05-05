function onReady() {
   const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');
   addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;
    // create a new li
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');
    // set the input's type to checkbox
    checkbox.type = "checkbox";
    // set the title
    newLi.textContent = title;
    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    // attach delete to the li
    // attach the li to the ul
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value = '';
    // create delete button
    let deleteButton = document.createElement('button')
       deleteButton.textContent = 'Delete!'
       newLi.appendChild(deleteButton)
    // remove newLi -- remove to-do item 
       deleteButton.addEventListener('click', () => {
        newLi.parentNode.removeChild(newLi)
       });
  });
}

window.onload = function() {
alert("The window has loaded!");
onReady();
};
