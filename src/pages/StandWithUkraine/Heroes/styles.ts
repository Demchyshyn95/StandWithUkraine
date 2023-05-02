import styled from "styled-components";
import { Button } from "antd";

export const StyleList = styled.div`
	display: flex;
	justify-content: space-between;
	justify-items: flex-start;
	flex-wrap: wrap;
	margin: 50px;
	min-height: 750px;
`;

export const Container = styled.div`
	margin: 100px 0 200px 0;
	text-align: center;
	//background-image: url("https://newshub.shorthandstories.com/assets/S21x0AamP5/fallback-750x667.jpg");
	//background-size: cover;
	//background-attachment: fixed;
`;

export const Content = styled.div`
	padding: 100px 0;
`;

export const Title = styled.span`
	font-weight: 600;
	font-size: 70px;
	background: #121FCF;
	background: linear-gradient(to bottom, #121FCF 45%, #FFFF12 65%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const LoadMore = styled.div`
	width: 100%;
	font-weight: 600;
	font-size: 70px;
	background: #121FCF;
	background: linear-gradient(to bottom, #121FCF 45%, #FFFF12 65%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-align: center;
`;

export const BtnDonate = styled(Button)``;

export const Footer = styled.div`
	background-image: url("https://pbs.twimg.com/media/FM0rA0fWUAIp4ph.jpg");
	background-size: cover;
	background-attachment: fixed;
	color: yellow;
	font-size: 60px;
	display: flex;
	align-items: end;
	justify-items: center;
	height: 950px;
`;