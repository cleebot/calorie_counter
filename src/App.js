import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogMeal from './components/LogMeal';
import MealHistory from './components/MealHistory';


function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <Route exact path="/">
      Home
      </Route>
      <Route path="log-your-meal">
        <LogMeal />
      </Route>
      <Route path="meal-history">
      <MealHistory />
      </Route>
      <Footer className="footer" />

    </div>
  );
}

export default App;
