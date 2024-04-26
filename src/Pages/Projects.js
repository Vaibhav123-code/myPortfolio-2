import React, { useContext } from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/Card'
import { ProjectContext } from '../Context/ProjectContext'
import Footer from '../Components/footer';

function Projects() {
  const  projects = useContext(ProjectContext);

  return (
    <div>
      <Header />

      <div className='card-container'>
      { projects && projects.map((project,i)=> (
         <ProjectCard key={i} project={project} delay={(i % 4) * 0.2}/>
      ))}
     
       </div>
       <Footer />
    </div>
  )
}

export default Projects