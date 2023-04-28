import { Container, Title, MediaContent, DonateBox, HeaderBox, TitleBold, Call } from "./styles";
import { videoData } from "./config";
import React from 'react';

const StandWithUkraine = () => {

	return (
		<Container>
			<Title>
				{"WAR IN UKRAINE 24.02.2022 4:00..."}
			</Title>
			<MediaContent>
				<iframe
				        src={`${videoData.url}?autoplay=1&mute=1&modestbranding=1&control=0`}
				        title={"YouTube video player"}
				        allow={ videoData.permissions }
				/>
				<DonateBox>
					<HeaderBox>
					<TitleBold>
						{"PLEASE HELP UKRAINE"}
					</TitleBold>
					<Call>
						{"Stop putin"}
					</Call>
					</HeaderBox>
					{/*<FooterBox>*/}
					{/*	{"Thank you for your support!\n" +*/}
					{/*		"please share it with your family and friends\n" +*/}
					{/*		"#StandWithUkraine"}*/}
					{/*</FooterBox>*/}
				</DonateBox>
			</MediaContent>
		</Container>
	);
};

export default StandWithUkraine;