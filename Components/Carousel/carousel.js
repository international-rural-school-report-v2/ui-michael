class Carousel extends Component {

  constructor(selector) {

    // Call parent constructor method
    super(selector);

    // Set some properties
    this.baseClass = 'header';

    // Get list of images from carousel component
    this.carousel = this.getElement('container');
    this.links = this.carousel.dataset.images.split(',');
    
    // Preload each image into the cache to improve initial transition
    this.links.forEach(link => {
      const img = new Image();
      img.src = `../Assets/${link}`;
    })

    // Every five seconds, call cycle() to change the backgrond image
    window.setInterval(() => {
      this.cycle();
    }, 5000);
  }

  cycle() {
    this.links.push(this.links.shift());
    this.carousel.style.backgroundImage = `url('../Assets/${this.links[0]}')`;
  }
}

// Create Carousel instance on document ready
document.addEventListener('DOMContentLoaded', () => new Carousel('header'));