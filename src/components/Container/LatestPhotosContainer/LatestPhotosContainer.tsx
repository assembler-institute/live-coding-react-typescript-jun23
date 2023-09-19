import { FC } from "react";
import { cardInfo } from "../../../assets/other/db.ts";
import PhotoDetailView from "../PhotoDetailView/PhotoDetailView.tsx";
import PhotoStyles from "../PhotoStyles/PhotoStyles.tsx";

type CardInfoProps = {
	id: number;
	title: string;
	img: string;
	views: number;
	date: string;
};

export const LatestPhotosContainer: FC<CardInfoProps> = () => {
	return (
		<div className="container-fluid tm-container-content tm-mt-60">
			<div className="row mb-4">
				<h2 className="col-6 tm-text-primary">Latest Photos</h2>
				<div className="col-6 d-flex justify-content-end align-items-center">
					<form action="" className="tm-text-primary">
						Page{" "}
						<input
							type="text"
							defaultValue={1}
							size={1}
							className="tm-input-paging tm-text-primary"
						/>{" "}
						of 200
					</form>
				</div>
			</div>
			{cardInfo ? (
				cardInfo?.map(({ id, title, img, views, date }: CardInfoProps) => {
					return (
						<PhotoStyles key={id}>
							<PhotoDetailView
								title={title}
								img={img}
								views={views}
								date={date}
							/>
						</PhotoStyles>
					);
				})
			) : (
				<p>Please refresh the page</p>
			)}
			<a href="" className="btn btn-primary tm-btn-next">
				Next Page
			</a>
		</div>
	);
};
