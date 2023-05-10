import TrashIcon from '../assets/icons/trash-alt-regular.svg';
import SyncIcon from '../assets/icons/sync-alt-solid.svg';
import ArrowIcon from '../assets/icons/arrow-right-solid.svg';
import EllipsisIcon from '../assets/icons/ellipsis-v-solid.svg';

export default class UI {
  constructor(store) {
   
    this.store = store;
  }
  updateIcons() {
    this.syncIcon = document.querySelector('.sync-icon');
    this.syncIcon.src = SyncIcon;

    this.arrowIcon = document.querySelector('.arrow-icon');
    this.arrowIcon = ArrowIcon;
  }

  

}