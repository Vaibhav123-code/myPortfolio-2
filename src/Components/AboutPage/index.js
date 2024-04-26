import React from 'react';
import './about.css'
import Resume from '../Resume';
import { motion } from 'framer-motion';

export default function AboutPage() {

  return (
    <div className='about-container'>
      <Resume />
      <motion.h2 className='about-heading'
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.3}}
      >About Me</motion.h2>
         <motion.p className='aboutme'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
         >
         Hello! 👋 I'm Vaibhav Agnihotri, a dedicated and driven web developer with a passion for building cutting-edge
          digital solutions. Equipped with proficiency in HTML, CSS, JavaScript, and the MERN stack,
           I bring a relentless work ethic and unwavering commitment to every project I undertake.
    
               I'm ready to tackle new challenges and make a meaningful impact in the world of technology.
                Let's create something extraordinary together!
         </motion.p>

         <motion.h2 className='about-heading'
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.6}}
         > 
            Skills
         </motion.h2>

         <motion.p className='skill-container'
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.8}}
         >
          <ul className='skill-list'>
            <li> Html</li>
            <li> Css</li>
            <li> Javascript</li>
            <li> React</li>
            <li> MongoDB</li>
            <li> Node Js</li>
            <li>
              <a href='https://drive.google.com/file/d/14XRRo8gA64ageeuWHa_hpcpMeDZ2B_Oo/view' target='blank'>
              <button className='certificate'>Mern Certificate</button>
              </a>
              </li>
            </ul>
             </motion.p>

             <motion.h2 className='about-heading'
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 1}}
             >Contact Information</motion.h2>

             <motion.p className='skill-container'
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.7}}
             >
             <p>Email: vaibhavagnihotri2001@gmail.com</p>
             <p>phone: 7999786913</p>
             <p>Open for Job </p>
             </motion.p>
    </div>
  );
}
