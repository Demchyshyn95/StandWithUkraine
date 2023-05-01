import Card from "./Card.component";
import { PageProps } from "./types";
import React, { FC } from 'react';

const CardPage: FC<PageProps> = (props: PageProps) => {
	const { hero } = props; // data

	return (
		<Card
			{...{
					hero
			}}
		/>
	);
};

export default CardPage;