import React from 'react';

const Contact = () => (
  <section className="contact" id="contact">
    <div className="contact__content">
      <h2 className="contact__content__title">Contact.</h2>
      <p className="contact__content__text">
        {/* eslint-disable-next-line max-len */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus magna fringilla urna porttitor rhoncus.
      </p>
      <div className="contact__content__links row">
        <a href="mailto:joly.leo@gmail.com">Mail</a>
        <a href="/" target="_blank">LinkdeIn</a>
        <a href="/" target="_blank">GitHub</a>
        <a href="/" target="_blank">Instagram</a>
      </div>
    </div>
  </section>
);

export default Contact;