import { FC } from "react";
import * as photos from "../../../assets/img";

type CardInfoProps = {
	id: number;
	title: string;
	img: string;
	views: number;
	date: string;
};

const PhotoDetailView: FC<CardInfoProps> = ({ img, title, views, date }) => {
	const photo = photos[`photo${img}`];

	return (
		<div className="row tm-mb-90 tm-gallery">
			<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
				<figure className="effect-ming tm-video-item">
					<img src={photo} alt="Image" className="img-fluid" />
					<figcaption className="d-flex align-items-center justify-content-center">
						<h2>{title}</h2>
						<a href="photo-detail.html">View more</a>
					</figcaption>
				</figure>
				<div className="d-flex justify-content-between tm-text-gray">
					<span className="tm-text-gray-light">{date}</span>
					<span>{views} views</span>
				</div>
			</div>
		</div>
	);
};

export default PhotoDetailView;
