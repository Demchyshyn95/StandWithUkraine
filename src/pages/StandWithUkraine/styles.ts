import styled from "styled-components";
import { Image } from "antd";

export const Container = styled.div`
	height: 100%;
	//background: url(../../assets/images/standing-with-ukraine-0.jpg);
	background: url("https://i0.wp.com/epthinktank.eu/wp-content/uploads/2023/03/EPRS_BRIE_TT_745688_Russia_war_Ukraine_final.jpeg?fit=1000%2C666&ssl=1") no-repeat;
	background-size: cover;
	padding-top:80px;
`
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
	justify-content: space-between;
  iframe {
    height: 400px;
	width: 60%;
	border: none;
	pointer-events: none;
  }
`;
export const DonateBox = styled.div`
	height: 600px;
	position: relative;
	box-shadow: -2px 2px 60px 17px rgba(238,206,20,0.63);
	-webkit-box-shadow: -2px 2px 60px 17px rgba(238,206,20,0.63);
	-moz-box-shadow: -2px 2px 60px 17px rgba(238,206,20,0.63);
	width: 35%;
	background: rgb(12,12,210);
	background: linear-gradient(180deg, rgba(12,12,210,1) 38%, rgba(227,226,23,1) 61%);
	border: 10px solid black;
`;

export const StyledImage = styled(Image)`
	width: 100%;
	&& .ant-image .css-dev-only-do-not-override-zjzpde {
		//height: 400px;
	}
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
	top: 80px;
	right: 20px;
	font-size: 40px;
	background: #000000;
	background: linear-gradient(to bottom, #000000 37%, #CF0000 65%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const FooterBox = styled.div`
 	bottom: 10px;
`;