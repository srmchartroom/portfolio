//? importing React dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//? importing style dependencies
import "./Sass/base/App.scss";

//? importing component dependencies
import Header from "./components/Header";

//? importing page dependencies
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio"

// import Testimonials from "./components/Testimonials";
// import ExecutiveSummary from "./components/ExecutiveSummary";
// import Career from "./components/Career";
// import NextSteps from "./components/NextSteps";
import NoMatch from "./pages/NoMatch";
// import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      {/* <StoreProvider> */}
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route component={NoMatch} />
        </Switch>
      </div>

      {/* </StoreProvider> */}
    </Router >
  );
}

export default App;









