export default class Store {
    constructor() {
      this.task_data = JSON.parse(localStorage.getItem('tasks_data'))
      || [];
    }
  
}