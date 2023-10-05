import { FC } from "react";
import { Header } from "../../Header/Header";
import { useForm } from "react-hook-form";

let renderedCount = 0;

export const WithReactHookForm: FC = () => {
	renderedCount++;

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isSubmitted, touchedFields, dirtyFields },
	} = useForm({
		defaultValues: {
			username: "",
			password: "",
			age: "",
		},
	});

	// console.log("isSubmitted", isSubmitted);
	// console.log("touchedFields", touchedFields);
	// console.log("dirtyFields", dirtyFields);

	// console.log({ register, handleSubmit });

	const onSubmit = (data: any) => {
		// console.log({ data }); // api call
		reset();
	};

	// const userNameWatch = watch("username");

	return (
		<>
			<Header renderedCount={renderedCount} />
			<h1>Form With React Hook Form</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register("username", {
						required: true,
						minLength: {
							value: 2,
							message: "Minimum lenght is 2 characters",
						},
						maxLength: {
							value: 5,
							message: "Maximum lenght is 20 characters",
						},
					})}
					placeholder="Username"
				/>
				{errors.username && <p>{errors.username.message}</p>}
				{/* <p>{userNameWatch && userNameWatch}</p> */}
				<input
					{...register("password", { required: true, pattern: /^[A-Za-z]+$/i })}
					placeholder="Password"
				/>
				<input
					{...register("age", { valueAsNumber: true })}
					placeholder="Age"
				/>
				<button type="submit" disabled={false}>
					Submit
				</button>
			</form>
		</>
	);
};
