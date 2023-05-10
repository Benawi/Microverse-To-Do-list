export default class HandleTasks {
  constructor(store, UI) {
    this.store = store;
    this.UI = UI;
  }

  addItem() {
    this.input = document.getElementById('add-task');
    this.arrowIcon = document.querySelector('.arrow-icon');

    this.input.addEventListener('keydown', (e) => {
      const i = this.store.getItems().length;

      if (e.key === 'Enter' && e.target.value) {
        const obj = {
          description: e.target.value,
          completed: false,
          index: i,
        };
        this.input.value = '';
        this.store.add(obj);
        this.UI.generateHtmlTasks();
        e.preventDefault();
      }
    });

    this.arrowIcon.addEventListener('click', () => {
      const i = this.store.getItems().lenght;
      if (this.input.value) {
        const obj = {
          description: this.input.value,
          completed: false,
          index: i,
        };
        this.input.value = '';
        this.store.add(obj);
        this.UI.generateHtmlTasks();
      }
    });
  }

  removeItem(index) {
    this.store.remove(index);
    this.UI.generateHtmlTasks();
  }

  toggleElementTrashIcon(element) {
    this.trash = element.parentElement.querySelector('.trash-icon');
    this.ellipsis = element.parentElement.querySelector('.fa-ellipsis-v');
    this.trash.classList.remove('d-none');
    this.ellipsis.setAttribute('class', 'icon ellipsis-icon fas fa-ellipsis-v ms-auto text-secondary d-none');
  }

  
}