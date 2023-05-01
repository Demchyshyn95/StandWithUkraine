import { Call, DonateBox, FooterBox, FooterCall, FooterText, HeaderBox,	LeftBox, Link, MediaContent, Message, MessageContainer, NextLine, RightBox, RightMessage, StyledQrCode,
	Title, TitleBold, Content } from "./style";
import { donateUrl, videoData } from "./config";
import React, { FC } from 'react';
import { ComponentProps } from "./types";

const Donate: FC<ComponentProps> = (props: ComponentProps) => {
	const { onRedirectToDonate } = props; // func

	return (
		<Content>
			<Title>
				{"WAR IN UKRAINE 24.02.2022 4:00..."}
			</Title>
			<MediaContent>
				<iframe
					src={`${videoData.url}?autoplay=1&mute=2&modestbranding=1&control=1`}
					allow={videoData.permissions}
					loading={"lazy"}
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
					<MessageContainer>
						<LeftBox>
							<Message>
								{"Help Ukraine by sharing information, donating.\n" +
									"influencing your elected officials, joining rallies or through other means"}
							</Message>
							<NextLine/>
							<Message>
								{"Find out more using\n" +
									"QR code below"}
							</Message>
							<StyledQrCode
								value={donateUrl}
							/>
						</LeftBox>
						<RightBox>
							<RightMessage>
								{"Putin and Russian army started an unprovoked war with peace-loving nation of Ukraine. Ukrainians are now are forced to protect their homes from Russian invasion.\n" +
									"Imagine if this happened to your home?"}
							</RightMessage>
							<NextLine/>
							<RightMessage>
								{"By helping Ukraine you help support democracy, and right of people in Ukraine and around the world for self-determination, principles on which USA was founded and still exists to this day."}
							</RightMessage>
							<NextLine/>
							<RightMessage>
								{"Don't let the Russian regime of state-sponsored lies, fear and bullying win, and continue terrorize people in the US and around the world!"}
							</RightMessage>
							<NextLine/>
							<RightMessage>
								{"Link to the website:"}
							</RightMessage>
							<Link
								onClick={ onRedirectToDonate }
								type={"link"}
							>
								{donateUrl}
							</Link>
						</RightBox>
					</MessageContainer>
					<FooterBox>
						<FooterText>
							{"Thank you for your support!\n" +
								"please share it with your family and friends"}
						</FooterText>
						<FooterCall>
							{"#StandWithUkraine"}
						</FooterCall>
					</FooterBox>
				</DonateBox>
			</MediaContent>
		</Content>
	);
};

export default Donate;