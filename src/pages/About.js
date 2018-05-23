import React, {Component} from "react";

import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";

class About extends Component{



	render(){


		return (
			<div className="all_wrap">
			<Header />
			<div className="inner_page container">
			<p>This is About page</p>
			</div>        
			<Footer />
			</div>
			);
	}
}

export default About;