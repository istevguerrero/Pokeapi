import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Inicio from './components/pages/Inicio';
import Pokemon from './components/pages/Pokemon';
import Items from './components/pages/Items';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
          <Switch>
            <Route path="/" exact component={Inicio}/>
            <Route path="/pokemon" component={Pokemon}/>
            <Route path="/items" component={Items}/>
          </Switch>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
