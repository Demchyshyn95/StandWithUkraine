import Donate from "./Donate.component";
import React, { FC, useCallback } from 'react';
import { donateUrl } from "./config";

const DonatePage: FC = () => {
	const onRedirectToDonate = useCallback(() => {
		window.open(donateUrl, "_blank")
	}, []);

	return (
		<Donate {...{
			onRedirectToDonate
		}}
		/>
	);
};

export default DonatePage;