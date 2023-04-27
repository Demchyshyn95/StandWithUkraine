import { StyledHead, StyledLayout, StyledMenu } from "./styles";
import { MainMenu } from "../../../costants/Menus";
import { Link } from "react-router-dom";
import { AntMenuItem } from "../Ant";
import React, { FC } from 'react';

const Layout: FC = () => {
	return (
		<StyledLayout>
			<StyledHead>
				<StyledMenu
					theme={"dark"}
					mode={"horizontal"}
					defaultSelectedKeys={["2"]}
				>
					{MainMenu.map(({ key, title, link, danger }) => (
						<AntMenuItem
							key={key}
							title={title}
							danger={danger}
						>
							<Link
								to={link}
							>
								{title}
							</Link>
						</AntMenuItem>
					))}
				</StyledMenu>
			</StyledHead>
		</StyledLayout>
	);
};

export default Layout;