class BurgerMenu extends Component {

  constructor(selector) {

    // Call parent constructor method
    super(selector);

    // Set some properties
    this.baseClass = selector;
    this.isOpen = false;

    // Cache burger element selector and get list of menu links
    this.burger = this.getElement('burger');
    this.links = this.getElements('link');
    this.menuButton = this.burger.querySelector('.fa-bars');

    // Bind events
    this.burger.addEventListener('click', e => this.toggle(e));
    this.links.forEach(link => link.addEventListener('click', e => this.close(e)));
  }

  toggle(event) {
    event.preventDefault();    

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.addModifier('opened');      
      this.menuButton.classList.remove('fa-bars');
      this.menuButton.classList.add('fa-times');
    } else {
      this.removeModifier('opened');
      this.menuButton.classList.remove('fa-times');
      this.menuButton.classList.add('fa-bars');
    }
  }

  close(event) {
    this.isOpen = false;
    this.removeModifier('opened');
    this.menuButton.classList.remove('fa-times');
    this.menuButton.classList.add('fa-bars');
  }
}

// Create BurgerMenu instance on document ready
document.addEventListener('DOMContentLoaded', () => new BurgerMenu('nav'));