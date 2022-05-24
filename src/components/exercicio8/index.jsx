import Jokes from './Jokes.jsx'
import JokeCard from './JokeCard.jsx'

import jokes from './jokes.json'

function Exercicio8() {
	return (
		<>
			<Jokes>
				{jokes.map(joke => {
					return (
						<JokeCard
							key={joke.id}
							setup={joke.setup}
							punchline={joke.punchline}
						/>
					);
				})}
			</Jokes>
		</>
	)
}

export default Exercicio8
