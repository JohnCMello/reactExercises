import { useState } from 'react';

import './index.css'

function Exercicio4() {
	const [clickCounter, setClickCounter] = useState(0);

	const handleClick = () => {
		setClickCounter(clickCounter + 1)
	};
	return (
		<>
			<div className='counter' >
				<h2 className='counter__message'>{`Button has been cliked: ${clickCounter} times`}</h2>
				<button className='counter__button' onClick={handleClick}>Click Me!</button>
			</div>
		</>
	);
};

export default Exercicio4;
