import { Hero } from "./Hero";
import { about } from "./About";
import { chef } from "./Chef";
import { contact } from "./Contact";
import { Menu } from "./Menu";
import { footer } from "./Footer";
import './stylesheets/main.css';
import './stylesheets/menu.css';
import './stylesheets/animations.css';

const content = document.querySelector('#content');

let indexIsOpen = true;
let sectionIsOpen = false;


console.log(content);

const Nav = () => {
  const nav = document.createElement('nav');

  const navLeft = document.createElement('div');
  navLeft.setAttribute('id', 'navLeft');

  const navLogo = document.createElement('h1');
  navLogo.innerText = 'The Bakery Co.';

  const navRight = document.createElement('div');
  navRight.setAttribute('id', 'navRight');

  const menuItem = document.createElement('div');
  menuItem.setAttribute('id', 'menuItem');
  menuItem.innerHTML = `<h1>Menu</h1><div></div>`;

  const aboutItem = document.createElement('div');
  aboutItem.setAttribute('id', 'aboutItem');
  aboutItem.innerHTML = `<h1>About</h1><div></div>`;

  const contactItem = document.createElement('div');
  contactItem.setAttribute('id', 'contactItem');
  contactItem.innerHTML = `<h1>555-505-5505</h1><div></div>`;

  navLeft.appendChild(navLogo);
  navRight.appendChild(menuItem);
  navRight.appendChild(aboutItem);
  navRight.appendChild(contactItem);

  nav.appendChild(navLeft);
  nav.appendChild(navRight);

  navLeft.addEventListener('click', () => {
    sectionIsOpen = false;
    if (!indexIsOpen) {
      indexIsOpen = !indexIsOpen;
      content.classList.add('loader');
      loadPage();
    }
    else {
      document.getElementById("heroSection").scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  menuItem.addEventListener('click', () => {
    sectionIsOpen = false;
    if (indexIsOpen) {
      indexIsOpen = !indexIsOpen;
      content.classList.add('loader');
      loadPage();
      document.querySelector('#menuItem').classList.add('activeItem');
    }
  });

  aboutItem.addEventListener('click', () => {
    sectionIsOpen = true;
    if (indexIsOpen) {
      document.getElementById("aboutSection").scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      indexIsOpen = !indexIsOpen;
      content.classList.add('loader');
      loadPage();
      setTimeout(() => {
        document.getElementById("aboutSection").scrollIntoView({ behavior: "smooth", block: "center" });
      }, 1250);
    }
  });

  contactItem.addEventListener('click', () => {
    sectionIsOpen = true;
    if (indexIsOpen) {
      document.getElementById("contactSection").scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      sectionIsOpen = true;
      indexIsOpen = !indexIsOpen;
      content.classList.add('loader');
      loadPage();
      setTimeout(() => {
        document.getElementById("contactSection").scrollIntoView({ behavior: "smooth", block: "center" });
      }, 1250);
    }
  });

  return nav
}
const loadNav = () => {
  content.appendChild(Nav());
}

const loadPage = () => {
  content.innerHTML = '';

  if (indexIsOpen) {
    loadNav();
    setTimeout(() => {
      createIndexPage();
      content.classList.remove('loader');
    }, 1250);
  }
  else {
    loadNav();
    setTimeout(() => {
      createMenuPage();
      content.classList.remove('loader');
    }, 1250);
  }





}
const createIndexPage = () => {
  content.appendChild(Hero());
  content.appendChild(about);
  content.appendChild(chef);
  content.appendChild(contact);
  content.appendChild(footer);
  console.log(content);
}
const createMenuPage = () => {
  content.appendChild(Menu());
  content.appendChild(footer);
  console.log(content);
}


window.addEventListener('scroll', () => {
  //about section
  const aboutText = document.querySelector('#aboutText');
  const aboutImage = document.querySelector('#aboutImage');
  //chef section
  const chefText = document.querySelector('#chefText');
  const chefImage1 = document.querySelector('#chefImage1');
  const chefImage2 = document.querySelector('#chefImage2');
  //contact section
  const contactText = document.querySelector('#contactSquare').firstElementChild;


  console.log('scrollY: ', scrollY);
  var pos = scrollY * -0.05;
  if (scrollY <= 800) {
    console.log('pos: ', pos);
    aboutImage.style = `transform: translate(0,${pos * -1.01}px);`;
    aboutText.style = `transform: translate(0,${pos}px);`;
  }
  if (800 < scrollY <= 1440) {
    chefText.style = `transform: translate(0,${pos}px);`;
    chefImage2.style = `transform: translate(0,${pos * -1.01}px);`;
    chefImage1.style = `transform: translate(0,${pos}px);`;
  }
  if (1440 < scrollY <= 2012) {
    contactText.style = `transform: translate(0,${pos * 0.9}px);`;
  }

});

window.onload = () => {
  loadPage();
};