import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home/Home";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import NotFound from "./components/Shared/NotFound/NotFound";
import ServiceDetails from "./components/HomePage/Service-details/ServiceDetails";
import Contract from "./components/Contract/Contract";
import Login from "./components/Login/Login";
import AuthProvider from "./components/context/AuthProvider";
import Register from "./components/Login/Register/Register";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import About from "./components/About/About";
import ServicesBox from "./components/ServicesPage/ServicesBox/ServicesBox";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/contract">
              <Contract></Contract>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/servicesbox">
              <ServicesBox></ServicesBox>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
