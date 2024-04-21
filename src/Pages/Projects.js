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
      { projects && projects.map(project => (
         <ProjectCard key={project.id} project={project} />
      ))}
     
       </div>
       <Footer />
    </div>
  )
}

export default Projects