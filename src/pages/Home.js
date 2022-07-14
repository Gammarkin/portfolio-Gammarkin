import React from 'react';
import Header from '../components/generic/Header';
import Introduction from '../components/home/Introduction';
import Description from '../components/home/Description';

export default function Home() {
  return (
    <main>
      <Header />
      <Introduction />
      <Description />
    </main>
  );
}
