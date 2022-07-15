import React, {useContext} from 'react';
import projects from '../../data/projects';
import AppContext from '../../context/AppContext';

export default function MainProjects() {
  const {darkMode} = useContext(AppContext);
  return (
    <section className={`project__container__${darkMode ? 'dark' : 'light'}`}>
      <section className="project__list">
        {projects.map((project) => (
          <article className="project__item" key={project.name}>
            <a className="project__item" href={project.link}>
              <img
                className="project__image"
                src={project.image}
                alt={project.name}
              />
              <h2 className="project__name">{project.name}</h2>
              <p className="project__description">{project.description}</p>
            </a>
          </article>
        ))}
      </section>
    </section>
  );
}
