import React, {useContext, useState} from 'react';
import AppContext from '../../context/AppContext';

import {hardSkills, softSkills} from '../../data/skills';

export default function Description() {
  const {darkMode} = useContext(AppContext);

  const [skillsToUse, setSkillsToUse] = useState(hardSkills);
  const [hoveringMessage, setHoveringMessage] = useState(
    'Hover a skill to see its description'
  );

  return (
    <section
      className={`description__container__${darkMode ? 'dark' : 'light'}`}
    >
      <section
        className={`description__container__text__${
          darkMode ? 'dark' : 'light'
        }`}
      >
        <section className="description__content">
          <p className="description__text">
            My current skills as a developer.
            <br /> And there's more to come.
          </p>
          <section className="description__button__container">
            <button
              className={`description__container__hardskill__button__${
                darkMode ? 'dark' : 'light'
              }`}
              type="button"
              onClick={() => setSkillsToUse(hardSkills)}
            >
              Hard-skills
            </button>
            <button
              className={`description__container__softskill__button__${
                darkMode ? 'dark' : 'light'
              }`}
              type="button"
              onClick={() => setSkillsToUse(softSkills)}
            >
              Soft-skills
            </button>
          </section>

          <p className="description__text">{hoveringMessage}</p>
          <section className="description__skills">
            {skillsToUse.map(({name, icon, description}) => {
              if (skillsToUse === hardSkills) {
                return (
                  <img
                    className="description__container__hardskill__icon"
                    key={name}
                    src={icon}
                    alt={name}
                    onMouseLeave={() =>
                      setHoveringMessage('Hover a skill to see its description')
                    }
                    onMouseEnter={() => setHoveringMessage(description)}
                  />
                );
              }

              return (
                <h1
                  className="description__container__softskill__description"
                  key={name}
                  onMouseLeave={() =>
                    setHoveringMessage('Hover a skill to see its description')
                  }
                  onMouseEnter={() => setHoveringMessage(description)}
                >
                  {name}
                </h1>
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
}
