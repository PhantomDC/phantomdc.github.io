import React from "react";

import {BrowserRouter, Route} from "react-router-dom";

// Pages

import Main from "./pages/Main";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

export default () => (
	<BrowserRouter>
		<div className="all_wrap">
			<Route path="/" exact component={Main}/>
			<Route path="/about" component={About}/>
			<Route path="/contacts" component={Contacts}/>
		</div>
	</BrowserRouter>

	);
