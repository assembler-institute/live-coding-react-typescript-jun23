import { FC, PropsWithChildren } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};
