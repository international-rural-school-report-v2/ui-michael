class Button extends Component {

  constructor(selector) {

    // Call parent constructor method
    super(selector);

    // Set some properties
    this.baseClass = selector;

    // Add click handler to each button that fades to menu color and then loads the front end
    this.links = this.getElements('button');

    this.links.forEach(link => link.addEventListener('click', e => this.close(e)));
    this.links.forEach(link => link.addEventListener('touchend', e => this.close(e)));
  }

  close(event) {
    event.preventDefault();
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
    setTimeout(() => { overlay.style.opacity = '1'; }, 100);
    setTimeout(() => { document.location = 'https://irsr-frontend.netlify.com/'; }, 500);    
  }
}

// Create Button instances on document ready
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button').forEach(button => {
    new Button(button.className.split('__button')[0]);
  })
});