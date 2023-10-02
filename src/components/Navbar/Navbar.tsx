import { FC } from "react";
import { Link } from "react-router-dom";

import "./navbar.styles.css";

export const Navbar: FC = () => {
	return (
		<nav>
			<ul className="navbar-list">
				<li className="navbar-item">
					<Link to="/" className="navbar-link">
						Home
					</Link>
				</li>
				<li className="navbar-item">
					<span className="navbar-separator">|</span>
				</li>
				<li className="navbar-item">
					<Link to="/checkout" className="navbar-link">
						Checkout
					</Link>
				</li>
			</ul>
		</nav>
	);
};
