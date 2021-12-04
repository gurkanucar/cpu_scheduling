import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        {/* <CssBaseline /> */}

        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="*" exact={true} component={NotFoundPage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
