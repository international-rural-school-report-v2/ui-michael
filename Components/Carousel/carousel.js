class Carousel extends Component {

  constructor(selector) {

    // Call parent constructor method
    super(selector);

    // Set some properties
    this.baseClass = 'body';

    // Get list of images from carousel component
    this.carousel = document.body.dataset.carouselImages.split(',');
    
    // Preload each image into the cache to improve initial transition
    this.carousel.forEach(link => {
      const img = new Image();
      img.src = `../Assets/${link}`;
    })

    // Every five seconds, call cycle() to change the backgrond image
    window.setInterval(() => {
      this.cycle();
    }, 5000);
  }

  cycle() {
    this.carousel.push(this.carousel.shift());
    document.body.style.backgroundImage = `url('../Assets/${this.carousel[0]}')`;
  }
}

// Create Carousel instance on document ready
document.addEventListener('DOMContentLoaded', () => new Carousel('body'));