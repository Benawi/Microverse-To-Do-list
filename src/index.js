import './styles.css';
import Store from './modules/Store.js';
import HandleTasks from './modules/HandleTasks.js';
import UI from './modules/UI.js';

const STORE = new Store();
const UI_INTERFACE = new UI(STORE);
const LIST = new HandleTasks(STORE, UI_INTERFACE);

UI_INTERFACE.generateHtmlTasks();
LIST.addItem();
LIST.clearAll();
LIST.updateValue();
