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
	margin-bottom: 200px;
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

export const BtnDonate = styled(Button)`
	padding-top: 0;
	background: #ffc60a;
	height: 15px;
	color: black;
	font-weight: 700;
	font-size: 42px;
	font-family: system-ui;
	margin-left: 20px;
`;

export const Footer = styled.div`
	background-image: url("https://pbs.twimg.com/media/FM0rA0fWUAIp4ph.jpg");
	background-size: cover;
	background-attachment: fixed;
	color: yellow;
	display: flex;
	align-items: center;
	justify-items: left;
	flex-wrap: wrap;
	height: 950px;
`;