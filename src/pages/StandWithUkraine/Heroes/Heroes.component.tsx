import { StyleList, Container, Title, Content } from "./styles";
import CardPage from "../../../components/general/Card/Card.page";
import { ComponentProps } from "./types";
import { IHero } from "../../../types";
import React, { FC } from 'react';
import { heroes } from "./config";

const Heroes: FC<ComponentProps> = (props: ComponentProps) => {

	return (
		<Container>
			<Content>
				<Title>
					{"DEFENDERS OF FREEDOM"}
				</Title>
			</Content>
			<StyleList>
				{heroes.map((hero: IHero) => <CardPage {...{
					hero
				}}/>)}
			</StyleList>
		</Container>
	);
};

export default Heroes;