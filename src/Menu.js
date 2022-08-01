import image1 from './images/macaron_cream.png';
import image2 from './images/macaron_orange.png';
import image3 from './images/macaron_brightPink.png';
import image4 from './images/macaron_pink.png';
import image5 from './images/macaron_yellow.png';

const Menu = () => {
  const menu = document.createElement('section');
  menu.setAttribute('id', 'menuSection');

  const removeElement = element => {
    if (element.classList.contains('activeItem')) {
      element.classList.remove('activeItem');
    }
  }
  const menuSquare = document.createElement('div');
  menuSquare.setAttribute('id', 'menuSquare');

  const menuTitle = document.createElement('h1');
  menuTitle.setAttribute('id', 'menuTitle');
  menuTitle.innerText = 'Cookie Doe';
  const menuImage = document.createElement('div');
  menuImage.setAttribute('id', 'menuImage');

  const menuGrid = document.createElement('div');
  menuGrid.setAttribute('id', 'menuGrid');

  const menuItemDiv1 = document.createElement('div');
  const menuItemDiv2 = document.createElement('div');
  const menuItemDiv3 = document.createElement('div');
  const menuItemDiv4 = document.createElement('div');
  const menuItemDiv5 = document.createElement('div');

  const menuTitleFirst = document.createElement('h1');
  menuTitleFirst.innerText = 'Cookie Doe';

  const menuTitleSecond = document.createElement('h1');
  menuTitleSecond.innerText = 'Citrus';

  const menuTitleThird = document.createElement('h1');
  menuTitleThird.innerText = 'Strawberry Swirl';

  const menuTitleFourth = document.createElement('h1');
  menuTitleFourth.innerText = 'Cheesecake';

  const menuTitleFifth = document.createElement('h1');
  menuTitleFifth.innerText = 'Lemon Meringue';

  const menuItem1 = document.createElement('div');
  menuItem1.setAttribute('id', 'menuItem1');
  menuItem1.classList.add('menuGridItem');
  menuItem1.appendChild(menuTitleFirst);
  menuItem1.appendChild(menuItemDiv1);

  const menuItem2 = document.createElement('div');
  menuItem2.setAttribute('id', 'menuItem2');
  menuItem2.classList.add('menuGridItem');
  menuItem2.appendChild(menuTitleSecond);
  menuItem2.appendChild(menuItemDiv2);

  const menuItem3 = document.createElement('div');
  menuItem3.setAttribute('id', 'menuItem3');
  menuItem3.classList.add('menuGridItem');
  menuItem3.appendChild(menuTitleThird);
  menuItem3.appendChild(menuItemDiv3);

  const menuItem4 = document.createElement('div');
  menuItem4.setAttribute('id', 'menuItem4');
  menuItem4.classList.add('menuGridItem');
  menuItem4.appendChild(menuTitleFourth);
  menuItem4.appendChild(menuItemDiv4);

  const menuItem5 = document.createElement('div');
  menuItem5.setAttribute('id', 'menuItem5');
  menuItem5.classList.add('menuGridItem');
  menuItem5.appendChild(menuTitleFifth);
  menuItem5.appendChild(menuItemDiv5);

  menuGrid.appendChild(menuItem1);
  menuGrid.appendChild(menuItem2);
  menuGrid.appendChild(menuItem3);
  menuGrid.appendChild(menuItem4);
  menuGrid.appendChild(menuItem5);

  menuSquare.appendChild(menuTitle);
  menuSquare.appendChild(menuImage);
  menuSquare.appendChild(menuGrid);

  menu.appendChild(menuSquare);

  menuItem1.addEventListener('click', () => {
    menuTitle.innerText = 'Cookie Doe';
    menuImage.style.backgroundImage = ` url(${image1})`;
    menuItem1.classList.add('activeItem');
    removeElement(menuItem2);
    removeElement(menuItem3);
    removeElement(menuItem4);
    removeElement(menuItem5);
    menuTitle.style = 'color:#FEEFC6';

  });
  menuItem2.addEventListener('click', () => {
    menuTitle.innerText = 'Citrus';
    menuImage.style.backgroundImage = `url(${image2})`;
    menuItem2.classList.add('activeItem');
    removeElement(menuItem1);
    removeElement(menuItem3);
    removeElement(menuItem4);
    removeElement(menuItem5);
    menuTitle.style = 'color:#FAB057';

  });
  menuItem3.addEventListener('click', () => {
    menuTitle.innerText = 'Strawberry Swirl';
    menuImage.style.backgroundImage = `url(${image3})`;
    menuItem3.classList.add('activeItem');
    removeElement(menuItem1);
    removeElement(menuItem2);
    removeElement(menuItem4);
    removeElement(menuItem5);
    menuTitle.style = 'color:#FE8382';

  });
  menuItem4.addEventListener('click', () => {
    menuTitle.innerText = 'Cheesecake';
    menuImage.style.backgroundImage = `url(${image4})`;
    menuItem4.classList.add('activeItem');
    removeElement(menuItem1);
    removeElement(menuItem2);
    removeElement(menuItem3);
    removeElement(menuItem5);
    menuTitle.style = 'color:#FDC7BF';

  });
  menuItem5.addEventListener('click', () => {
    menuTitle.innerText = 'Lemon Meringue';
    menuImage.style.backgroundImage = `url(${image5})`;
    menuItem5.classList.add('activeItem');
    removeElement(menuItem1);
    removeElement(menuItem2);
    removeElement(menuItem3);
    removeElement(menuItem4);
    menuTitle.style = 'color:#FBE679';
  });

  return menu;
}
export { Menu }