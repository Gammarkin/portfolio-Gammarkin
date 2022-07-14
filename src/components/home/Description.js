import React, {useContext, useState} from 'react';
import AppContext from '../../context/AppContext';

import {hardSkills, softSkills} from '../../data/skills';

export default function Description() {
  const {darkMode} = useContext(AppContext);

  const [skillsToUse, setSkillsToUse] = useState(hardSkills);
  const [hoveringMessage, setHoveringMessage] = useState('');

  return (
    <section
      className={`description__container__${darkMode ? 'dark' : 'light'}`}
    >
      <h2 style={{color: 'white'}}>Skills</h2>
      <section
        className={`description__container__text__${
          darkMode ? 'dark' : 'light'
        }`}
      >
        <section>
          <button type="button" onClick={() => setSkillsToUse(hardSkills)}>
            Hard-skills
          </button>
          <button type="button" onClick={() => setSkillsToUse(softSkills)}>
            Soft-skills
          </button>
          <section>
            {skillsToUse.map((skill) => {
              if (skillsToUse === hardSkills) {
                return (
                  <img
                    key={skill.name}
                    src={skill.icon}
                    alt={skill.name}
                    onMouseLeave={() => setHoveringMessage('')}
                    onMouseEnter={() => setHoveringMessage(skill.description)}
                  />
                );
              }
              return (
                <h1
                  key={skill.name}
                  onMouseLeave={() => setHoveringMessage('')}
                  onMouseEnter={() => setHoveringMessage(skill.description)}
                >
                  {skill.name}
                </h1>
              );
            })}
          </section>
        </section>

        <p>{hoveringMessage}</p>
      </section>
    </section>
  );
}
