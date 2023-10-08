import React, { useState } from "react";

type FormProps = {
	[key: string]: string | number;
};

const useForm = <T extends FormProps>(initialValues: T) => {
	const [formState, setFormState] = useState(initialValues);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("formState", formState);
	};

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};

	return {
		formState,
		handleChange,
		handleSubmit,
	};
};

export default useForm;
