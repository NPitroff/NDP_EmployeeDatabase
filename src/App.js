import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Maps from "./pages/Maps";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/" component={Search} />
          {/* <Route exact path= "/maps" component={Maps} />  */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;