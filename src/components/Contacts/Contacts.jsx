import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contacts.css'

const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6w1inur', 'template_28fvr8w', form.current, '_Hr_corQEYoAzDHPy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
  };

  return (
    <div className='contact-form'>
      <h2>Contact Us</h2>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
        <input type="text" name="user_name" required />
      <label>Email</label>
        <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" required/>
        <input type="submit" value="Send" />
     </form>
  </div>
  );
}

export default Contacts;

