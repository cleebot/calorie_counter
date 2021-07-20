import './App.css';
import { Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogMeal from './components/LogMeal.jsx';
import MealHistory from './components/MealHistory';
import DietInfo from './components/DietInfo';


function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <Route exact path="/">
        <h1>Calorie Counter</h1>
        <h4>Welcome to Calorie Counter! Calorie Counter is an app to keep track of your macronutrients, whether you are trying to lose weight, gain mass, or anything inbetween, Calorie Counter will you stay on track of whatever dietary goals you have! Please check the resources below for valuable resources that will have nutritional information on common foods.</h4>
        <br />
        <h4>To start logging your meals, please click <Link to='logmeal'>here!</Link>
          <br /> To check your meal logs, click <Link to='mealhistory'>here!</Link>
          <br />If you need help with dietary info, please check <Link to='dietinfo'>here!</Link>
        </h4>
        <h3>Resources</h3>
        If you need resources to check nutritional values of the food that you are eating, please check the links below!<br />
        <a href="https://www.nutritionvalue.org/" target="_blank" rel="noreferrer">Nutrition Value</a>
        </Route>
      <Route exact path="/Logmeal">
        <LogMeal />
      </Route>
      <Route path="/MealHistory">
      <MealHistory />
      </Route>
      <Route path="/dietinfo">
        <DietInfo />
      </Route>
      <Footer className="footer" />

    </div>
  );
}

export default App;
