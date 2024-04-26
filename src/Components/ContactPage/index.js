import React from 'react';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Snackbar } from '@mui/material';
import './styles.css'; 
import Footer from '../footer';
import { motion } from 'framer-motion';
function ContactPage() {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6mvlk2w', 'template_72t0pl8', form.current, 'PnkYUZYO1RTp437YK')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log("error",error.text);
      });
  }

  return (
    <div>
      <div className="container-contact">
        <motion.div className="wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6}}
        >
          <div className="title">Contact</div>
          <div className="desc">Feel free to reach out to me for any questions or opportunities!</div>

          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-title">Email Me 🚀</div>
            <input className="contact-input" placeholder="Your Email" name="from_email" />
            <input className="contact-input" placeholder="Your Name" name="from_name" />
            <input className="contact-input" placeholder="Subject" name="subject" />
            <textarea className="contact-input-message" placeholder="Message" rows="4" name="message" />
            <input type="submit" className="contact-button" value="Send" />
          </form>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={()=>setOpen(false)}
            message="Email sent successfully!"
            severity="success"
          />
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage;
