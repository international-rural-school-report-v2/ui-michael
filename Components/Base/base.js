// Base component for other components to build off. Experimentally using BEM class conventions

class Component {
  constructor(selector) {
    this.baseClass = 'component';
    this.self = document.querySelector(`.${selector}`);
  }

  getElement(element) {
    return this.self.querySelector(`.${this.baseClass}__${element}`);
  }

  getElements(elements) {
    return this.self.querySelectorAll(`.${this.baseClass}__${elements}`);
  }

  addModifier(modifier) {
    this.self.classList.add(`${this.baseClass}--${modifier}`);
  }

  removeModifier(modifier) {
    this.self.classList.remove(`${this.baseClass}--${modifier}`);
  }
}

// Fix starting scroll location to top of page if no hash fragment found
window.addEventListener('load', () => {
  if (!window.location.hash) {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0,0);
  }
});