import CurrencyPage from "../Currency/Currency.page";
import TimeInPage from "../TimeIn/TimeIn.page";
import { ComponentProps } from "./types";
import { Container } from "./styles";
import React, { FC } from "react";

const Home: FC<ComponentProps> = (props: ComponentProps): any => {
	console.log("Home [view]", props);
	return (
		<Container>
			<TimeInPage/>
			<CurrencyPage/>
		</Container>
	)
};

export default Home;