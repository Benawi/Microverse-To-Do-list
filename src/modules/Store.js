export default class Store {
    constructor() {
      this.task_data = JSON.parse(localStorage.getItem('tasks_data'))
      || [];
    }
  
    updateLocalStorage() {
      localStorage.setItem('tasks_data', JSON.stringify(this.task_data));
    }
  
    add(obj) {
      this.task_data.push(obj);
      this.updateLocalStorage();
    }
  
}