import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import Menu from "./Menu";



class Header extends Component{

	render(){

		return (
			<div className="header">
				<div className="container">
					<div className="header_wrap">
						<NavLink to="/" exact className="logo">
							<img src="/img/logo.svg" alt="Pena"/>
						</NavLink>
						<Menu />
						<div className="addr">
							<a href="tel:+74951342235">+7 (495) 134-22-35</a>
							<a href="mailto:info@vpene.ru">info@vpene.ru</a>
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default Header;