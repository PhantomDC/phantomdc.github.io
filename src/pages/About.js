import React, {Component} from "react";

import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";

class About extends Component{

	constructor(props){
		super(props);
		this.state = {activeMenu : "О нас"};
	}

	render(){


		return (
			<div className="all_wrap">
			<Header activeMenu={this.state.activeMenu}/>
			<div className="inner_page container">
			<p>This is About page</p>
			</div>        
			<Footer />
			</div>
			);
	}
}

export default About;