import StandWithUkrainePage from "../pages/StandWithUkraine/StandWithUkraine.page";
import LayoutPage from "../components/general/Layout/LayoutPage";
import ErrorPage from "../components/general/Error/Error.page.";
import { Routes, Route, Navigate } from 'react-router-dom';
import CurrencyPage from "../pages/Currency/Currency.page";
import WeatherPage from "../pages/Weather/Weather.page";
import { useLocation } from "react-router-dom";
import HomePage from "../pages/Home/Home.page";
import { RoutesURL } from "./types";
import React, { FC } from "react";
import { Content } from "./styles";

const RootPage: FC = (): React.ReactElement => {
	const location = useLocation();
	console.log("Location", location);

	return (
		<>
			<LayoutPage/>
			<Content>
				<Routes>
					<Route
						path={RoutesURL.BASE}
						element={<HomePage/>}
					/>
					<Route
						path={RoutesURL.USDT_BTC}
						element={<CurrencyPage/>}
					/>
					<Route
						path={RoutesURL.WEATHER_}
						element={<WeatherPage/>}
					/>
					<Route
						path={RoutesURL.STAND_WITH_UKRAINE}
						element={<StandWithUkrainePage/>}
					/>
					<Route
						path={RoutesURL.ERROR}
						element={<ErrorPage/>}
					/>
					<Route
						element={<Navigate to="/" replace/>}
						path={"*"}
					/>
				</Routes>
			</Content>
		</>
	)
};

export default RootPage;
