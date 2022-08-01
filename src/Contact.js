const contact = document.createElement('section');
contact.setAttribute('id','contactSection');
contact.innerHTML = `
<div id="contactSquare">
      <div>
        <h1>Visit our store</h1>
        <div id="contactGrid">
          <div id="contactGridLeft">
            <b><p>Retail Trading Hours</p></b>
            <p>CANAL WALK</p>
            <p>Mon-Sun: 9am – 9pm</p>
            <p>Public Holidays: 9am – 9pm</p>
            <p>TYGER VALLEY</p>
            <p>Mon – Sat: 9am – 7pm</p>
            <p>Sun: 9am – 5pm</p>
            <p>Public Holidays: 9am – 7pm</p>
          </div>
          <div id="contactGridRight">
            <b><p>The Bakery Co.</p></b>
            <p>Canal Walk & Tyger Valley</p>
            <p>Pickup points</p>
            <p>Call: +27 21 9140482</p>
            <p>Email us</p>
            <p>Contact us</p>
          </div>
        </div>
      </div>
    </div>
`;
export {contact}