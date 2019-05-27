class Carousel extends Component {

  constructor(selector) {

    // Call parent constructor method
    super(selector);

    // Set some properties
    this.baseClass = 'header';

    // Get list of images from empty component and populate the div with img nodes
    this.carousel = this.getElement('image');
    this.links = Array.from(this.carousel.dataset.images.split(','));
    this.altTags = Array.from(this.carousel.dataset.alt.split(','));

    window.setInterval(() => {
      this.cycle();
    }, 5000);
  }

  cycle() {
    this.links.push(this.links.shift());
    this.carousel.src = `Assets/${this.links[0]}`;
    this.altTags.push(this.altTags.shift());
    this.carousel.alt = `Assets/${this.altTags[0]}`;
  }
}

// Create Carousel instance on document ready
document.addEventListener('DOMContentLoaded', () => new Carousel('header'));