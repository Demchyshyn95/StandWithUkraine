import { Layout, Menu } from "antd";
import styled from "styled-components";
import { AntHeader } from "../Ant";

export const StyledHead = styled(AntHeader)`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	padding: 0;
	opacity: 90%;
	background: #6d859c;
`;

export const StyledMenu = styled(Menu)`
	display: flex;
	justify-content: space-between;
	width: 100%;

  && .ant-menu-item {
		width: 33.3%;
		text-align: center;
	}
`;
export const StyledLayout = styled(Layout)``;

export const Content = styled.div`
	border: 1px solid silver;
	height: 100%;
`;