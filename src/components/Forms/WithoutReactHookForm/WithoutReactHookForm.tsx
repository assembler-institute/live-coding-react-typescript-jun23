import { FC, useState } from "react";
import { Header } from "../../Header/Header";

let renderedCount = 0;

export const WithouthReactHookForm: FC = () => {
	renderedCount++;

	const [formState, setFormState] = useState({
		username: "",
		password: "",
		age: 0,
	});

	const { username, password, age } = formState;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("formState", formState);
	};

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};

	return (
		<>
			<Header renderedCount={renderedCount} />
			<h1>Form Without React Hook Form</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="string"
					name="username"
					value={username}
					onChange={handleChange}
					placeholder="Username"
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					placeholder="Password"
				/>
				<input
					type="number"
					name="age"
					value={age}
					onChange={handleChange}
					placeholder="Age"
				/>
				<button type="submit" disabled={false}>
					Submit
				</button>
			</form>
		</>
	);
};
