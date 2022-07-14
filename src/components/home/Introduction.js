import React, {useContext} from 'react';
import AppContext from '../../context/AppContext';

export default function Introduction() {
  const {darkMode} = useContext(AppContext);
  return (
    <section
      className={`introduction__container__${darkMode ? 'dark' : 'light'}`}
    >
      <h1 className={`introduction__title__${darkMode ? 'dark' : 'light'}`}>
        Marcos Roberto
      </h1>
      <h2 className={`introduction__subtitle__${darkMode ? 'dark' : 'light'}`}>
        Full-Stack Developer
      </h2>

      <section className="introduction__description__container">
        <p
          className={`introduction__description__${
            darkMode ? 'dark' : 'light'
          }`}
        >
          Hello, i'm Marcos. Born in the 2000's, since my first day i've had a
          passion for tech, and in this project i document a portion of my
          journey as a developer.
        </p>
      </section>

      <section className="introduction__contacts">
        <p style={{fontWeight: 900}}>Email: marcosrbnsf@gmail.com.</p>

        <a
          className={darkMode ? 'github-icon-dark' : 'github-icon-light'}
          href="https://github.com/Gammarkin"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
      </section>
    </section>
  );
}
