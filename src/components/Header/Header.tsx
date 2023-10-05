import { FC } from "react";

type HeaderProps = {
	renderedCount: number;
};

export const Header: FC<HeaderProps> = ({ renderedCount }) => (
	<>
		<span className="counter span__counter--right span__counter--styles">
			Nº of Times the Component is Loaded/ Rendered: {renderedCount}
		</span>
	</>
);
