import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import About from './About/About';
import Footer from './Footer/Footer';
import './App.css';
import Contact from './Contact/Contact';
import Cards from './MyProjects/Cards';
import Resume from './Resume/Resume';



function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div className="navBar">
          <NavBar />
        </div>
        <Switch>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Route exact path="/">
              <Header />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Cards />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Redirect to={`/`} />
          </div>
          <Footer />
        </div>
        </Switch>
      </Router>



    </div>
  );
}

export default App;
