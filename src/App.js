import {Route , Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch } from 'react-router';
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>    
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path="/hats" component={HatsPage}/>
      </Switch>
      
    </div>
  );
}

export default App;

