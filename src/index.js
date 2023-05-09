import './styles.css';
const TASKS_DATA = [
    {
      index: 0,
      description: 'Attend morning session',
      completed: false,
    },
    {
      index: 1,
      description: 'Participate programming contest',
      completed: true,
    },
    {
      index: 2,
      description: 'Solve hackerank challenges',
      completed: false,
    },
    {
      index: 3,
      description: 'Meditate',
      completed: false,
    },
  ];

  function generateHtmlTasks() {
    const todoListContainer = document.getElementById('todo-list-container');
  
    TASKS_DATA.forEach((obj) => {
      const checked = (obj.completed) ? 'checked' : '';
      todoListContainer.innerHTML += `<div id="${obj.index}"class="d-flex justify-content-start mt-1">
      <div class="form-check me-1">
        <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="true" aria-label="..." ${checked}>
      </div>
      <h2 class="fs-6 text-secondary">${obj.description}</h2>
      <i class="fas fa-ellipsis-v ms-auto text-secondary"></i>
    </div>`;
    });
  }

  generateHtmlTasks();