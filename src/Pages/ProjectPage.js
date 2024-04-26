import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectContext } from '../Context/ProjectContext';
import Footer from '../Components/footer';
import Header from '../Components/Header';
import { motion } from 'framer-motion';

function ProjectPage() {
    const { id } = useParams();
    const projects = useContext(ProjectContext);
    const [data, setData] = useState({});

    useEffect(() => {
        if (id) {
            const filteredData = projects.filter(project => project.title === id);
            setData(filteredData[0]);
        }
    }, [id, projects]);

    return (
        <div>
            <Header />
        <div className="project-container">
            <motion.h1 className="project-title"
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.5}}
            >{data.title}</motion.h1>

            <motion.div className="project-details"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8}}
            >
                <h2 className="section-heading">Key Features</h2>
                <ul className="feature-list">
                    <li>{data.feature1}</li>
                    <li>{data.feature2}</li>
                    <li>{data.feature3}</li>
                </ul>
                <h2 className="section-heading">Description</h2>
                <p className="description">{data.moreDetails}</p>
            </motion.div>
            <h2 className="section-heading">Tech Stack</h2>
            <motion.div className="tech-s"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6}}
            >
                    {data.tech && data.tech.map((item ,index) => (
                       <div className='tech-flex'>
                         <span className="tech-item" key={index}>{item.name}</span>
                          <img src={item.url} alt='img' className='tech-img'/>
                       </div>
                    ))}
                </motion.div>

            <motion.div className="button-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5}}
            >
                <a href={data.liveDemoLink} target='blank'>
                    <button className="demo-button">Demo Link</button>
                </a>
                <a href={data.github} target='blank'>
                    <button className="source-button">Source Code</button>
                    </a>
            </motion.div>
           
        </div>
        <Footer />
        </div>
    );
}

export default ProjectPage;
