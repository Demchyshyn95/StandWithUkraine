import { StyleList, Container, Title, Content, LoadMore, BtnDonate, Footer } from "./styles";
import CardPage from "../../../components/general/Card/Card.page";
import { ComponentProps } from "./types";
import { IHero } from "../../../types";
import React, { FC } from 'react';
import { heroes } from "./config";

const Heroes: FC<ComponentProps> = (props: ComponentProps) => {
	const { onRedirectToDonate } = props // func
	return (
		<Container>
			<Content>
				<Title>
					{ "DEFENDERS OF FREEDOM" }
				</Title>
			</Content>
			<StyleList>
				{ heroes.map((hero: IHero) => <CardPage { ...{
					hero
				}}/>)}
				<LoadMore>
					{ "Load more =>" }
				</LoadMore>
			</StyleList>
			<Footer>
				<BtnDonate
					type={ "link" }
					onClick={ onRedirectToDonate }
				>
					{ "DONATE TO THE BRAVE" }
				</BtnDonate>
			</Footer>
		</Container>
	);
};

export default Heroes;