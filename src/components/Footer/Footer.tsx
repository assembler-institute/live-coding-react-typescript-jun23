import { FC } from "react";

export const Footer: FC = () => {
	return (
		<footer className="footer">
			<div className="content has-text-centered">
				<p>
					<strong>Live Coding</strong> with <a href="">JUN'23</a>. The source
					code is licensed
					<a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The
					website content is licensed{" "}
					<a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
						CC ANS 4.0
					</a>
					.
				</p>
			</div>
		</footer>
	);
};
