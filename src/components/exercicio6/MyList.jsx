import React from 'react';

import './myList.css'

const MyList = (props) => {
  return (
    <>
      <ul className="_weirdestAnimals__list">{props.children}</ul>
    </>
  );
};

export default MyList;