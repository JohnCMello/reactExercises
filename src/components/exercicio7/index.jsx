import { useForm } from './useForm';

function Exercicio7() {
	const {
		userData,
		handleSubmit,
		handleChange
	} = useForm();

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="firstName"
					onChange={handleChange}
					value={userData.fistfirstNameName}
				/>
				<input
					type="text"
					name="lastName"
					onChange={handleChange}
					value={userData.lastName}
				/>
				<input
					type="submit"
					value="greet me"
				/>
			</form>
		</>
	);
};

export default Exercicio7;
