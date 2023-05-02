import Heroes from "./Heroes.component";
import React, { FC, useCallback } from 'react';
import { donateUrl } from "../Donate/config";

const HeroesPage: FC = () => {
	const onRedirectToDonate = useCallback(() => {
		window.open(donateUrl, "_blank")
	}, []);

	return (
		<Heroes
			{...{
				onRedirectToDonate
			}}
		/>
	);
};

export default HeroesPage;