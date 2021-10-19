
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Register from './Components/common/UserAuthentication/Firebase/Register/Register'
import About from './Components/About/About';
import Doctors from './Components/Doctors/Doctors'
import Services from './Components/Services/Services';
import AgentCenters from './Components/AgentCenters/AgentCenters';
import NotFound from './Components/NotFound/NotFound';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Details from './Components/Details/Details';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="App">
     <AuthProvider>
        {/* Routing Start */}
      <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
      <Route exact path="/">
         <Home></Home>
       </Route>
       <Route exact path="/home">
         <Home></Home>
       </Route>
       <Route path="/about">
         <About></About>
       </Route>
       <Route path="/services">
         <Services></Services>
       </Route>
       <Route path="/detail/:serviceId">
         <Details></Details>
       </Route>

       <Route path="/doctors">
         <Doctors></Doctors>
       </Route>
       <Route path="/AgentCenter">
         <AgentCenters></AgentCenters>
       </Route>
       <Route >
         <Register></Register>
       </Route>
       
       <Route path="*" >
         <NotFound ></NotFound>
       </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>

      {/* ROuting End */}
     </AuthProvider>
    
    </div>
  );
}

export default App;
