import React, {useContext} from 'react';
import AppContext from '../../context/AppContext';
import gamma from '../../icons/gamma.jpg';

export default function Introduction() {
  const {darkMode} = useContext(AppContext);
  return (
    <section className={`about__container__${darkMode ? 'dark' : 'light'}`}>
      <img
        className="about__image"
        src={gamma}
        alt="a young white men with curly hair"
      />

      <p className={`about__description__${darkMode ? 'dark' : 'light'}`}>
        Hello, My name is Marcos. I'm a full-stack developer from Brasil. Avid
        for learning, and a passionate for tech, i'm currently a JavaScript
        developer with knowledge of React, NodeJS, and Express. I love being
        part of a team, and I'm always looking for new challenges.
      </p>

      <section className="about__contacts">
        <p className={`about__email__${darkMode ? 'dark' : 'light'}`}>
          email: marcosrbnsf@gmail.com
        </p>

        <a
          className={`about__link__${darkMode ? 'dark' : 'light'}`}
          href="https://github.com/Gammarkin"
          rel="noreferrer"
          target="_blank"
        >
          <p>GitHub</p>
        </a>

        <a
          className={`about__link__${darkMode ? 'dark' : 'light'}`}
          href="https://www.linkedin.com/in/mknmarcosfilho/"
          rel="noreferrer"
          target="_blank"
        >
          <p>LinkedIn</p>
        </a>
      </section>
    </section>
  );
}
