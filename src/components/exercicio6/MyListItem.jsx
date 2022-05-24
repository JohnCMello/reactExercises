import React from 'react';

import './myListItem.css';

const MyListItem = (props) => {
  const {
    id,
    animalName,
    imageLink,
    description
  } = props;

  return (
    <>
      <li className='_weirdestAnimals__item' key={id}>
        <h2 className='_weirdestAnimals__title'>{animalName}</h2>
        <img className='_weirdestAnimals__image' src={imageLink} />
        <p className='_weirdestAnimals__description'>{description}</p>
      </li>
    </>
  );
};

export default MyListItem;