import styled from "styled-components";
import { Button, Image, QRCode } from "antd";

export const Title = styled.div`
	font-family: 'Horror Type', sans-serif;
	text-transform: uppercase;
	text-align: left;
	font-weight: bold;
	font-size: 28px;
	color: #792929;
	background: #000000;
	background: linear-gradient(to bottom, #000000 37%, #CF0000 65%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const MediaContent = styled.div`
	display: flex;
	justify-content: space-around;
 
	iframe {
	height: 500px;
	width: 60%;
	border: none;
	//pointer-events: none;
  }
`;
export const DonateBox = styled.div`
	//height: 580px;
	//overflow-clip: scroll;
	//position: relative;
	//box-shadow: -2px 2px 60px 17px rgba(238,206,20,0.63);
	//-webkit-box-shadow: -2px 2px 60px 17px rgba(238,206,20,0.63);
	//-moz-box-shadow: -2px 2px 60px 17px rgba(238,206,20,0.63);
	//width: 700px;
	//background: rgb(12,12,210);
	//background: linear-gradient(180deg, rgba(12,12,210,1) 38%, rgba(227,226,23,1) 61%);
	//border: 10px solid black;
	width: 700px;
`;

export const HeaderBox = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const TitleBold = styled.div`
	font-family: 'Horror Type', sans-serif;
	text-transform: uppercase;
	text-align: left;
	font-weight: bold;
	font-size: 60px;
	text-align: left;
	padding: 10px 20px;
	color: yellow;
`;

export const Call = styled.h4`
	text-align: right;
	position: absolute;
	text-transform: uppercase;
  	top: 80px;
	margin: 0;
	right: 20px;
	font-size: 50px;
	background: #000000;
	background: linear-gradient(to bottom, #000000 37%, #CF0000 65%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const FooterBox = styled.div`
 	margin-top: 10px;
	width: 700px;
`;

export const MessageContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;
export const LeftBox = styled.div`
	width: 35%;
`;
export const RightBox = styled.div`
	width: 55%;
	background: white;
	height: 350px;
	border-radius: 25px;
	padding: 10px;
	overflow: hidden;
	font-style: italic;
`
export const Message = styled.div`
	color: white;
	font-size: 21px;
	font-weight: 400;
	text-align: center;
`;

export const RightMessage = styled(Message)`
	color: #641515;
	font-size: 18px;
	font-weight: 500;
`;

export const NextLine = styled.br``;
export const Link = styled(Button)`
	width: 90%;
	font-size: 18px;
	text-align: center;
	font-weight: 400;
	text-decoration: underline;
	overflow: clip;
`;

export const StyledQrCode = styled(QRCode)`
	padding: 20px;
	margin-inline: 45px;
`;

export const FooterText = styled(Message)`
	font-size: 22px;
	text-transform: uppercase;
	color: rgb(219, 224, 231);
	font-weight: 600;
`;

export const FooterCall = styled(FooterText)`
	font-size: 26px;
	font-weight: 600;
	color: rgb(255, 242, 3);
`;

export const Content = styled.div``;
export const FooterTitle = styled(TitleBold)`
	margin-top: 150px;
`;