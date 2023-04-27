import React from 'react';
import { Container, Title, Donate, MediaContent, StyledImage } from "./styles";

const StandWithUkraine = () => {
	const donateSupport = "https://pbs.twimg.com/media/FMrVDWUXEAMaQuh.png";
	
	return (
		<Container>
			<Title>
				{"WAR IN UKRAINE 24.02.2022 4:00..."}
			</Title>
			<MediaContent>
				<iframe
				        src="https://www.youtube.com/embed/jrr_5GgGkVg?autoplay=1&mute=0&modestbranding=1&control=0"
				        title="YouTube video player"
				        allow="accelerometer; frameborder=0; allowfullscreen;
				        
				         autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture; web-share"
				/>
				<Donate>
					<StyledImage
						src={ donateSupport }
						height={"400px"}
						width={"100%"}
					/>
				</Donate>
			</MediaContent>
		</Container>
	);
};

export default StandWithUkraine;