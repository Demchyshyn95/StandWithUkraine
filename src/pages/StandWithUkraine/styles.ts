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
	text-align: center;
	font-weight: bold;
	font-size: 28px;
	color: #792929;
`;

export const MediaContent = styled.div`
	display: flex;
	justify-content: center;
  iframe {
    height: 400px;
	width: 60%;
	border: none;
	pointer-events: none;
  }
`;
export const Donate = styled.div`
	height: 400px;
	width: 35%;
		&&  .ant-image-mask {
	}
`;

export const StyledImage = styled(Image)`
	width: 100%;
	&& .ant-image .css-dev-only-do-not-override-zjzpde {
		//height: 400px;
	}
`;