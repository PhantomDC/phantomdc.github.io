import React, {Component} from "react";


class Menu extends Component{

	getMenu(){

		const menu = [
		{
			label : "О нас",
			link : "/about/"
		},
		{
			label : "Контакты",
			link : "/contacts/"
		}

		];

		let menuComp = menu.map((item,index)=>{

			let addClass = item.label == this.props.activeMenu ? "is-active" : "";

			return (<li key={index} className={addClass}>
			<a href={item.link}>{item.label}</a>					
			</li>)
		});


		return menuComp;
	}

	render(){

		let menu = this.getMenu();

		return (
			<ul className="menu">
				{menu}
			</ul>
			);
	}
}

export default Menu;