import { initialData } from './initialData';

import './index.css';

function Exercicio5() {
	return (
		<>
			<ul className="weirdestAnimals__list">
				{initialData.map((animal) => {
					return (
						<li className='weirdestAnimals__item' key={animal.id}>
							<h2 className='weirdestAnimals__title'>{animal.animalName}</h2>
							<img className='weirdestAnimals__image' src={animal.imageLink} />
							<p className='weirdestAnimals__description'>{animal.description}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Exercicio5;
