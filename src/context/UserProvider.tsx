import { FC, createContext, useState } from "react";
import {
	UserContextType,
	CurrentUserContextType,
} from "../types/context/userContext";

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: FC<CurrentUserContextType> = ({ children }: any) => {
	const [user, setUser] = useState<CurrentUserContextType>({
		name: "Jose",
		surname: "Valenzuela",
		avatar:
			"https://i.blogs.es/1e98e9/avatar-the-way-of-water-post-credits-scene-check-in-and-endi_zv4t/840_560.jpeg",
	});

	return (
		<UserContext.Provider value={{ ...user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
