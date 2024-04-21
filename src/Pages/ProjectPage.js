import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectContext } from '../Context/ProjectContext';
import Footer from '../Components/footer';

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
        <div className="project-container">
            <h1 className="project-title">{data.title}</h1>

            <div className="project-details">
                <h2 className="section-heading">Key Features</h2>
                <ul className="feature-list">
                    <li>{data.feature1}</li>
                    <li>{data.feature2}</li>
                    <li>{data.feature3}</li>
                </ul>
                <h2 className="section-heading">Description</h2>
                <p className="description">{data.moreDetails}</p>
            </div>
            <h2 className="section-heading">Tech Stack</h2>
            <div className="tech-s">
                    {data.tech && data.tech.map((item ,index) => (
                       <div className='tech-flex'>
                         <span className="tech-item" key={index}>{item.name}</span>
                          <img src={item.url} alt='img' className='tech-img'/>
                       </div>
                    ))}
                </div>

            <div className="button-container">
                <button className="demo-button">Demo Link</button>
                <button className="source-button">Source Code</button>
            </div>
           
        </div>
        <Footer />
        </div>
    );
}

export default ProjectPage;
