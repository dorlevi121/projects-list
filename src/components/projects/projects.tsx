import React, { useEffect } from 'react';
import projectsStyle from './projects.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { PROJECTS } from '../../assets/projects';

function Projects() {
    useEffect(() => {
        AOS.init({
            duration : 2000,
            offset: 200
          })
    }, []);
    const allProjects = PROJECTS.map((project: any, i: number) => (
        <div className={projectsStyle.Card} data-aos={!i? '': i%2 ? 'fade-right': 'fade-left'}>
            <img src={project.img} alt={project.title} />
            <div >
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a target="_blank" rel="noopener noreferrer" className={projectsStyle.BtnWeb} href={project.url}>demo</a>
                <a className={projectsStyle.BtnGithub} href={project.github}>github</a>
            </div>

        </div>
    ));

    return (
        <React.Fragment>
            {allProjects}
        </React.Fragment>
    )
}

export default Projects;
