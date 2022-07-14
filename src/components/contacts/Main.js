import React, {useContext} from 'react';
import AppContext from '../../context/AppContext';

export default function Main() {
  const {darkMode} = useContext(AppContext);
  return (
    <section className={`about__container__${darkMode ? 'dark' : 'light'}`}>
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
  );
}
