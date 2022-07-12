import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import GenericcProjectCard from './GenericProjectCard';

import {
  shoppingCartDesc,
  appIdeasDesc,
  recipeAppDesc,
  onlineStoreDesc,
  trySeriesDesc,
} from '../data/descriptions';
import {
  appIdeas,
  recipeApp,
  onlineStore,
  trySeries,
  shoppingCart,
} from '../data/links';

export default function Description() {
  const {darkMode} = useContext(AppContext);

  return (
    <section
      className={`description__container__${darkMode ? 'dark' : 'light'}`}
    >
      <section
        className={`description__container__text__${
          darkMode ? 'dark' : 'light'
        }`}
      >
        <h2>Projects</h2>
        <section className="description__container__text__projects">
          <GenericcProjectCard
            link={shoppingCart}
            title="Shopping cart"
            description={shoppingCartDesc}
          />

          <GenericcProjectCard
            link={appIdeas}
            title="App ideas"
            description={appIdeasDesc}
          />

          <GenericcProjectCard
            link={recipeApp}
            title="Recipe app"
            description={recipeAppDesc}
          />

          <GenericcProjectCard
            link={onlineStore}
            title="Online store"
            description={onlineStoreDesc}
          />

          <GenericcProjectCard
            link={trySeries}
            title="Try series"
            description={trySeriesDesc}
          />
        </section>
      </section>
    </section>
  );
}
