function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  if (localStorage['data'] !== null && localStorage['data'] !== undefined) {
		toDos = JSON.parse(localStorage['data']);
		renderTheUI();
	}

  function createNewToDo() {
      const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText.value) { return;
      };
      toDos.push({
        title: newToDoText.value,
        complete: false,
        id: id.value
   });
      localStorage['data'] = JSON.stringify(toDos);
      id++;
      newToDoText.value = '';
      renderTheUI();
  }

    function renderTheUI() {
      const toDoList = document.getElementById('toDoList');
      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const deleteButton = document.createElement('Button');
              deleteButton.textContent = 'Delete!';
              deleteButton.addEventListener('click', event => {
                toDos = toDos.filter(todo => {
					      return todo != toDo;
				});
            	localStorage['data'] = JSON.stringify(toDos);
              renderTheUI();
            });

       newLi.textContent = toDo.title;
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteButton);
      });
    }

  addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
    });
    renderTheUI();
  }

  window.onload = function() {
    onReady();
  };
