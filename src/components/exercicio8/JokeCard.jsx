import React from 'react';

const JokeCard = (props) => {
  const { setup, punchline } = props
  return (
    <>
      <li className='jokeCard'>
        <div className='jokeCard__container'>
          <div className='jokeCard--front'>
            <h2 className='jokeCard__heading'>{setup}</h2>
          </div>
          <div className="jokeCard--back">
            <p className='jokeCard__paragraph' >{punchline}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default JokeCard;