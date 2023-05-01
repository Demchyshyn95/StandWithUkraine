import { CardStyle, Container } from "./styles";
import { ComponentProps } from "./types";
import React, { FC } from 'react';

const Card: FC<ComponentProps> = (props: ComponentProps) => {
	const { hero } = props; // data
	console.log(hero.image)
	return (
		<Container>
			<CardStyle
				title={hero.title}
				src={hero.image}
				alt={hero.title}
			/>
		</Container>
	
	);
};

export default Card;