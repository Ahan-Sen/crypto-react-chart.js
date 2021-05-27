import "./App.css";
import Coins from "./screens/Coins";
import CoinData from "./screens/CoinData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Route exact path="/" component={Coins} />
          <Route path="/currency/:id" component={CoinData} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
