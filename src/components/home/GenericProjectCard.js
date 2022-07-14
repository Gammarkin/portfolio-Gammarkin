import React from 'react';
import PropTypes from 'prop-types';

export default function GenericProjectCard({description, title, link}) {
  return (
    <a
      className="genericCard__container"
      href={link}
      rel="noreferrer"
      target="_blank"
    >
      <h1>{title}</h1>

      <p>{description}</p>
    </a>
  );
}

GenericProjectCard.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
}.isRequired;
