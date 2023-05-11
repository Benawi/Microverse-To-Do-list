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

  remove(index) {
    this.task_data.splice(index, 1);
    this.task_data = this.task_data.filter((obj, index) => {
      obj.index = index + 1;
      return true;
    });
    this.updateLocalStorage();
  }

  updateDescription(index, description) {
    if (this.task_data[index]?.description) {
      this.task_data[index].description = description;
      this.updateLocalStorage();
    }
  }

  getItems() {
    return [...this.task_data];
  }

  removeAllCompleted() {
    this.task_data = this.task_data.filter((obj) => !obj.completed);
    this.task_data = this.task_data.filter((obj, index) => {
      obj.index = index + 1;
      return true;
    });
    this.updateLocalStorage();
  }

  updateCompleted(index, status) {
    this.task_data[index].completed = status;
    this.updateLocalStorage();
  }
}