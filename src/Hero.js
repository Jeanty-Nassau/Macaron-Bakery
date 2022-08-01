const Hero = () => {
  const hero = document.createElement('section');
  hero.setAttribute('id', 'heroSection');

  const heroSquare = document.createElement('div');
  heroSquare.setAttribute('id', 'heroSquare');

  const heroImage = document.createElement('div');
  heroImage.setAttribute('id', 'heroImage');

  const heroTitle = document.createElement('div');
  heroTitle.setAttribute('id', 'heroTitle');

  const heroTitleFirst = document.createElement('h1');
  heroTitleFirst.setAttribute('id', 'heroTitleFirst');
  heroTitleFirst.innerText = 'THE TASTIEST';

  const heroTitleSecond = document.createElement('h1');
  heroTitleSecond.setAttribute('id', 'heroTitleSecond');
  heroTitleSecond.innerText = 'PASTRIES IN THE';

  const heroTitleThird = document.createElement('h1');
  heroTitleThird.setAttribute('id', 'heroTitleThird');
  heroTitleThird.innerText = 'BUSINESS';

  const callToActionButton = document.createElement('button');
  callToActionButton.setAttribute('id', 'callToActionButton');
  callToActionButton.innerText = 'VISIT STORE';


  heroTitle.appendChild(heroTitleFirst);
  heroTitle.appendChild(heroTitleSecond);
  heroTitle.appendChild(heroTitleThird);

  heroSquare.appendChild(heroImage);
  heroSquare.appendChild(heroTitle);
  heroSquare.appendChild(callToActionButton);

  hero.appendChild(heroSquare);

  callToActionButton.addEventListener('click', () => {
    document.getElementById("contactSection").scrollIntoView({ behavior: "smooth", block: "center" });
  });

  return hero
}

export { Hero }
