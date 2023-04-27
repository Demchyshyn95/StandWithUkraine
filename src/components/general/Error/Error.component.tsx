import { ComponentProps } from "./types";
import { Button, Result } from 'antd';
import React, { FC } from 'react';

const Error: FC<ComponentProps> = (props : ComponentProps) => {
	console.log("[ErrorComponent] view", props)
	const { onGoHome } = props; //func

	return (
		<div>
			<Result
				subTitle={"Sorry, something went wrong."}
				status={"500"}
				title={"500"}
				extra={
				<Button
					onClick={ onGoHome }
					type={"primary"}
				>
					{"Back Home"}
			</Button>}
			/>
		</div>
	);
};

export default Error;