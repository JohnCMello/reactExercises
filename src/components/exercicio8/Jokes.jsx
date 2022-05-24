import React from 'react'

const Jokes = (props) => {
  return (
    <>
      <ul className='jokes'>{props.children}</ul>
    </>
  )
}

export default Jokes