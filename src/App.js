import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Nopage from './Component/Nopage/Nopage';
import About from './Component/About/About';
import Service from './Component/Service/Service';
import Instructor from './Component/Instructor/Instructor';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';


function App() {
  return (
  <div className="App">
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/service">
          <Service></Service>
        </Route>
        <Route path="/instructor">
          <Instructor></Instructor>
        </Route>
        <Route path="*">
          <Nopage></Nopage>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  </div>
  );
}

export default App;
