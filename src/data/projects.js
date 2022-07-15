import appExecutions from '../icons/app-executions.png';
import appReceitas from '../icons/app-receitas.png';
import trySeriesIMG from '../icons/try-series.png';
import shoppingCartIMG from '../icons/shopping-cart.png';
import onlineStoreIMG from '../icons/online-store.png';

import {
  appIdeas,
  recipeApp,
  onlineStore,
  shoppingCart,
  trySeries,
} from './links';

import {
  appIdeasDesc,
  recipeAppDesc,
  trySeriesDesc,
  shoppingCartDesc,
  onlineStoreDesc,
} from './descriptions';

const projects = [
  {
    name: 'App Executions',
    description: appIdeasDesc,
    image: appExecutions,
    link: appIdeas,
  },

  {
    name: 'App Receitas',
    description: recipeAppDesc,
    image: appReceitas,
    link: recipeApp,
  },

  {
    name: 'Try Series',
    description: trySeriesDesc,
    image: trySeriesIMG,
    link: trySeries,
  },

  {
    name: 'Shopping Cart',
    description: shoppingCartDesc,
    image: shoppingCartIMG,
    link: shoppingCart,
  },

  {
    name: 'Online Store',
    description: onlineStoreDesc,
    image: onlineStoreIMG,
    link: onlineStore,
  },
];

export default projects;
