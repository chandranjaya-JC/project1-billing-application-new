import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdMailOutline } from 'react-icons/md';
// import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './Cont.css'

function Cont() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9qkc46w', 'template_fijo9tj', form.current, 'z-aplWgguO_uF_Zwc')

    e.target.reset()

  };
  return (
    <section id="contact">
      <h5 className='contact__heading subheading'>Get In Touch</h5>
      <h2 className='contact__heading '>Contact Me</h2>

      <div className=" container contact__container">
        <div className="contact__options">
          <a 
          href="mailto:sabarika309@gmail.com" 
          rel="noprob" 
          target="_blank"
          className='contact__option article remove'>
            <MdMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sabarika309@gmail.com</h5>
            <a >Send a message</a>
          </a>
          
          <a 
          className='contact__option remove'
          href="https://wa.me/919952609812" 
          rel="noprob" 
          target="_blank">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 995**-***12</h5>
            <a >Send a message</a>
          </a>
        </div>

        {/* { END OF CONTACT OPTIONS} */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='button btn'>Send Message</button>
        </form>
      </div >
    </section >
  )
}

export default Cont




