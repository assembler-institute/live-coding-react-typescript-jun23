import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
	return (
		<div
			className="tm-hero d-flex justify-content-center align-items-center"
			data-parallax="scroll"
			data-image-src="img/hero.jpg"
		>
			<form className="d-flex tm-search-form">
				<input
					className="form-control tm-search-input"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				<button className="btn btn-outline-success tm-search-btn" type="submit">
					<BsSearch />
				</button>
			</form>
		</div>
	);
};
