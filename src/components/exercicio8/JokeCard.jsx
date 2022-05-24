import React from 'react';

const JokeCard = (props) => {
  const { setup, punchline } = props
  return (
    <>
      <li className='jokeCard'>
        <h2 className='jokeCard__heading'>{setup}</h2>
        <p className='jokeCard__paragraph' >{punchline}</p>
      </li>
    </>
  );
};

export default JokeCard;