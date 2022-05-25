import { useForm } from './useForm';

import './index.css';

function Exercicio7() {
	const {
		userData,
		handleSubmit,
		handleChange
	} = useForm();

	return (
		<>
			<form
				className='form'
				onSubmit={handleSubmit}
			>
				<input
					className='form__inputText'
					type="text"
					name="firstName"
					onChange={handleChange}
					value={userData.fistfirstNameName}
				/>
				<input
					className='form__inputText'
					type="text"
					name="lastName"
					onChange={handleChange}
					value={userData.lastName}
				/>
				<input
					className='form__inputSubmit'
					type="submit"
					value="greet me"
				/>
			</form>
		</>
	);
};

export default Exercicio7;
