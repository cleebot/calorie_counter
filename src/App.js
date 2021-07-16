import './App.css';
import { Route } from 'react-router-dom';
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
        <h3>Resources</h3>
        If you need resources to check nutritional values of the food that you are eating, please check the links below!<br />
        <a href="https://www.nutritionvalue.org/">Nutrition Value</a>
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
