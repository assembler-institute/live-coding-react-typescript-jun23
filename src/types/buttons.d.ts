import { MouseEvent } from "react";

export type ButtonAction = {
	initialValue?: number;
	label: string;
	action: (event: MouseEvent<HTMLButtonElement>) => void;
	display: string;
	id: string;
	quantity: number;
};