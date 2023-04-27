import React, { FC, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import Error from "./Error.component";

const ErrorPage: FC = () => {
	console.log("ErrorPage [Init]");
	const navigate = useNavigate();

	const onGoHome = useCallback(() => {
		navigate("/", { replace: true} );
	}, []);

	return (
		<Error
			{...
				{
					onGoHome
				}
			}
		/>
	);
};

export default ErrorPage;