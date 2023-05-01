import CarouselPage from "./Heroes/Heroes.page";
import DonatePage from "./Donate/Donate.page";
import { Container } from "./styles";
import React, { FC } from 'react';

const StandWithUkraine: FC = () => {
	return (
		<Container>
			{/*<StyleFirstSection/>*/}
			<DonatePage/>
			{/*<StyleSecondSection/>*/}
			<CarouselPage/>
			{/*<StyleThirdSection/>*/}
		</Container>
	);
};

export default StandWithUkraine;