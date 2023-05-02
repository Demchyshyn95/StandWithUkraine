import HeroesPage from "./Heroes/Heroes.page";
import DonatePage from "./Donate/Donate.page";
import { Container } from "./styles";
import React, { FC } from 'react';

const StandWithUkraine: FC = () => {
	return (
		<Container>
			<DonatePage/>
			<HeroesPage/>
		</Container>
	);
};

export default StandWithUkraine;