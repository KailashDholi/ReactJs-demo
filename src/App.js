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
                  <Route exact path="/MenuA" element={ <BlankPage pageName="MenuA"/>} />
                  <Route exact path="/MenuB" element={ <BlankPage pageName="MenuB"/>} />
                  <Route exact path="/MenuC" element={ <BlankPage pageName="MenuC"/>} />
                  <Route exact path="/MenuD" element={ <BlankPage pageName="MenuD"/>} />
                  <Route exact path="/Sales-Order" element={ <BlankPage pageName="Sales Order"/>} />
                  <Route exact path="/Purchase-Order" element={ <BlankPage pageName="Purchase Order"/>} />
                  <Route exact path="/about" element={ <BlankPage pageName="About"/>} />
                  <Route exact path="*" element={ <Dashboard/>} />
                
            </Routes>
          
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
