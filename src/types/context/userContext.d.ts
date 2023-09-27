export type CurrentUserContextType = {
	name: string;
	surname: string;
	avatar: string;
};

export type UserContextType = CurrentUserContextType & {
	setUser: (user: CurrentUserContextType) => void;
};