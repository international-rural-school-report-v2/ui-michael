class Team extends Component {

  constructor(selector) {

    // Call parent constructor method
    super(selector);

    // Set some properties
    this.baseClass = selector;

    // Cache burger element selector and get list of menu links
    this.team = this.getElements('member');
    this.team.forEach(member => {
      const name = member.dataset.name;
      const title = member.dataset.title;
      const github = member.dataset.github;
      const photo = member.dataset.photo;

      member.innerHTML += `<img src='${photo}' alt='${name}'>`;
      member.innerHTML += `<h3>${name}</h3>`;
      member.innerHTML += `<h3 class='team__role'>${title}</h3>`;
      member.innerHTML += `<p><span class='fab fa-github-alt'></span>&nbsp;&nbsp;<a href='${github}' target='_blank'>Github</a></p>`;
    })
    // this.burger = this.getElement('burger');
    // this.links = this.getElements('link');
    // this.menuButton = this.burger.querySelector('.fa-bars');

    // Bind events
    // this.burger.addEventListener('click', e => this.toggle(e));
    // this.burger.addEventListener('touchend', e => this.toggle(e));
    // this.links.forEach(link => link.addEventListener('click', e => this.close(e)));
    // this.links.forEach(link => link.addEventListener('touchend', e => this.close(e)));
  }

  // toggle(event) {
  //   event.preventDefault();    

  //   this.isOpen = !this.isOpen;

  //   if (this.isOpen) {
  //     this.addModifier('opened');      
  //     this.menuButton.classList.remove('fa-bars');
  //     this.menuButton.classList.add('fa-times');
  //   } else {
  //     this.removeModifier('opened');
  //     this.menuButton.classList.remove('fa-times');
  //     this.menuButton.classList.add('fa-bars');
  //   }
  // }

  // close(event) {
  //   this.isOpen = false;
  //   this.removeModifier('opened');
  // }
}

// Create Team instance on document ready
document.addEventListener('DOMContentLoaded', () => new Team('team'));