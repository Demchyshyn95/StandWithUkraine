import { CardStyle, Container, Description, Logo } from "./styles";
import { ComponentProps } from "./types";
import React, { FC } from 'react';

const Card: FC<ComponentProps> = (props: ComponentProps) => {
	const { hero } = props; // data

	return (
		<Container>
			<CardStyle
				title={hero.title}
				src={hero.url}
				alt={hero.title}
			/>
			<Logo>
				{"Heroes"}
			</Logo>
			<Description>
				{ hero.title }
			</Description>
		</Container>
	
	);
};

export default Card;