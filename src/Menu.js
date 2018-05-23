import React, {Component} from "react";

import {NavLink} from "react-router-dom";


class Menu extends Component{

	render(){


		return (
			<ul className="menu">
			
				<li><NavLink to="/contacts/">Контакты</NavLink></li>
				<li><NavLink to="/about/">О нас</NavLink></li>
			</ul>
			);
	}
}

export default Menu;