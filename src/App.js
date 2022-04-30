import React from "react";
import {Route, Routes} from "react-router-dom";
import {injectStyle} from "react-toastify/dist/inject-style";
import styled from "styled-components";

import {About, DashBoard, Header, Summary} from "./components";
import {backgroundColor} from "./StyledComponents/Constants";

const StyledDiv = styled.div`
	min-height: 100vh;
	background-color: ${backgroundColor};
`;

if (typeof window !== "undefined") {
	injectStyle();
}
const App = () => (
	<StyledDiv>
		<Header />
		<Routes>
			<Route exact path="/" element={<DashBoard />} />
			<Route path="/summary" element={<Summary />} />
			<Route path="/about" element={<About />} />
		</Routes>
	</StyledDiv>
);

export default App;
