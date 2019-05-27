// Base component for other components to build off. Experimentally using BEM class conventions

class Component {
  constructor(selector) {
    this.baseClass = 'component';
    this.self = document.querySelector(selector);
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