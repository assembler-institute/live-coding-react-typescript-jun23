import { FC, PropsWithChildren } from "react";
import "./photostyles.css";

const PhotoStyles: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<div className="border-line">{children}</div>
		</>
	);
};

export default PhotoStyles;
