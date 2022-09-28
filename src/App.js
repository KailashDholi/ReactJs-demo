import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import BlankPage from './Pages/BlankPage';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link,
  // Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="wrapper">
      <Header/>
      <SideBar logo={logo} title="New Title"/>
       <div className="content-wrapper">
       
            <Routes>
                  <Route  path="/" element={ <Dashboard/>} />
                  <Route exact path="/MenuA" element={ <BlankPage/>} />
                  <Route exact path="/MenuB" element={ <BlankPage/>} />
                  <Route exact path="/MenuC" element={ <BlankPage/>} />
                  <Route exact path="/MenuD" element={ <BlankPage/>} />
                  <Route exact path="/Sales-Order" element={ <BlankPage/>} />
                  <Route exact path="/Purchase-Order" element={ <BlankPage/>} />
                  <Route exact path="/about" element={ <BlankPage/>} />
                
            </Routes>
          
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
