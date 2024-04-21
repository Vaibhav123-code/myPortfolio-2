import React from 'react';
import './about.css'
import Resume from '../Resume';

export default function AboutPage() {

  return (
    <div className='about-container'>
      <Resume />
      <h2 className='about-heading'>About Me</h2>
         <p className='aboutme'>
         Hello! 👋 I'm Vaibhav Agnihotri, a dedicated and driven web developer with a passion for building cutting-edge
          digital solutions. Equipped with proficiency in HTML, CSS, JavaScript, and the MERN stack,
           I bring a relentless work ethic and unwavering commitment to every project I undertake.
    
               I'm ready to tackle new challenges and make a meaningful impact in the world of technology.
                Let's create something extraordinary together!
         </p>
         <h2 className='about-heading'>Skills</h2>
         <p className='skill-container'>
          <ul className='skill-list'>
            <li> Html</li>
            <li> Css</li>
            <li> Javascript</li>
            <li> React</li>
            <li> MongoDB</li>
            <li> Node Js</li>
            <li> MERN Stack</li>
            </ul>
             </p>
             <h2 className='about-heading'>Contact Information</h2>
             <p className='skill-container'>
             <p>Email: vaibhavagnihotri2001@gmail.com</p>
             <p>phone: 7999786913</p>
             <p>Open for Job </p>
             </p>
    </div>
  );
}
