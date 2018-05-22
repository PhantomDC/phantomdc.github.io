import React, {Component} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";

class App extends Component{

  render(){


    return (
      <div className="all_wrap">
        <Header />
        <Slider />
        <Footer />
      </div>
      );
  }
}

export default App;