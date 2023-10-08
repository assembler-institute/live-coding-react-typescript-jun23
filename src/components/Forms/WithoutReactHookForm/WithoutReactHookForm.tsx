import { FC } from "react";
import { Header } from "../../Header/Header";
import useForm from "../../../hooks/useForm";

let renderedCount = 0;

export const WithouthReactHookForm: FC = () => {
	renderedCount++;

	const { formState, handleSubmit, handleChange } = useForm({
		username: "",
		password: "",
		age: 0,
		country: "",
	});

	const { username, password, age, country } = formState;

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
				<input
					type="number"
					name="country"
					value={country}
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
