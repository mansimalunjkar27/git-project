import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import { Register } from "./components/Pages/Register";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Register" component={Register} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;