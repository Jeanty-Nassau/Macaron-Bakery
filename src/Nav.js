 const Nav = ()=>{ 
  const nav = document.createElement('nav');

  const navLeft = document.createElement('div');
  navLeft.setAttribute('id','navLeft');

  const navLogo= document.createElement('h1');
  navLogo.innerText = 'The Bakery Co.';

  const navRight = document.createElement('div');
  navRight.setAttribute('id','navRight');

  const menuItem = document.createElement('div');
  menuItem.setAttribute('id','menuItem');
  menuItem.innerHTML = `<h1>Menu</h1><div></div>`;

  const aboutItem = document.createElement('div');
  aboutItem.setAttribute('id','aboutItem');
  aboutItem.innerHTML = `<h1>About</h1><div></div>`;

  const contactItem = document.createElement('div');
  contactItem.setAttribute('id','contactItem');
  contactItem.innerHTML = `<h1>555-505-5505</h1><div></div>`;

  navLeft.appendChild(navLogo);
  navRight.appendChild(menuItem);
  navRight.appendChild(aboutItem);
  navRight.appendChild(contactItem);

  nav.appendChild(navLeft);
  nav.appendChild(navRight);

  menuItem.addEventListener('click',()=>{
    menuItem.classList.add('activeItem');
  });

  aboutItem.addEventListener('click',()=>{
    document.getElementById("aboutSection").scrollIntoView({behavior: "smooth", block: "center"});
  });

  contactItem.addEventListener('click',()=>{
    document.getElementById("contactSection").scrollIntoView({behavior: "smooth", block: "center"});
  });

  return nav
}
export {Nav}