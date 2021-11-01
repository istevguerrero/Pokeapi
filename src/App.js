import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Inicio from "./components/pages/Inicio";
import Pokemon from "./components/pages/Pokemon";
import Items from "./components/pages/Items";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/items" component={Items} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
