import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//? importing portfolio pages here
import Home from "./pages/Home";
//TODO import About from "./pages/About";
//TODO import Contact from "./pages/Contact";
//TODO import Portfolio from "./pages/Portfolio"

//TODO import Testimonials from "./components/Testimonials";
//TODO import ExecutiveSummary from "./components/ExecutiveSummary";
//TODO import Career from "./components/Career";
//TODO import NextSteps from "./components/NextSteps";

// // import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
//// import FavoritesList from "./pages/FavoritesList";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            {/* //TODO <Route exact path="/about" component={About} /> */}
            {/* //TODO <Route exact path="/contact" component={Contact} /> */}
            {/* //TODO <Route exact path="/portfolio" component={Portfolio} /> */}

            {/* //// <Route exact path="/favorites" component={FavoritesList} /> */}
            {/* //// <Route exact path="/posts/:id" component={Detail} /> */}
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
