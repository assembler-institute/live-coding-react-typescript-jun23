import { FC, PropsWithChildren, createContext, useContext } from "react";

// Primer paso es crear nuestro contexto. Luego le asignamos un valor
export const TeacherContext = createContext(undefined);
export const StudentContext = createContext(undefined);

// Segundo paso -> Asignarle valores
export const StudentProvider: FC<PropsWithChildren> = ({ children }) => {
	const amina: string = "Amina Seye";
	const ferran: string = "Ferran Cipres";

	return (
		<StudentContext.Provider value={{ amina, ferran }}>
			{children}
		</StudentContext.Provider>
	);
};

export const TeacherProvider: FC<PropsWithChildren> = ({ children }) => {
	const teacher = {
		teacher1: "Manu",
		teacher2: "Jose",
	};

	return (
		<TeacherContext.Provider value={{ teacher }}>
			{children}
		</TeacherContext.Provider>
	);
};

export const CombinedCreateContext = ({ children }) => {
	return (
		<>
			<StudentProvider>
				<TeacherProvider>{children}</TeacherProvider>
			</StudentProvider>
		</>
	);
};

export function studentContext() {
	const context = useContext(StudentContext);

	if (context === undefined || null)
		throw new Error("The context is undefined");

	return context;
}

export function teacherContext() {
	const context = useContext(TeacherContext);

	if (context === undefined || null)
		throw new Error("The context is undefined");

	return context;
}
