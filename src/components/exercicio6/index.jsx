import MyList from './MyList';
import MyListItem from './MyListItem';

import { initialData } from './initialData';

function Exercicio6() {
	return (
		<>
			<MyList>
				{initialData.map(animal => {
					return (
						<MyListItem
							key={animal.id}
							animalName={animal.animalName}
							imageLink={animal.imageLink}
							description={animal.description}
						/>
					);
				})}
			</MyList>
		</>
	);
};

export default Exercicio6;
