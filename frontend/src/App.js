import './App.css';
import Home from "./pages/Home";
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import ProductList from "./pages/ProductList"
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Product from './pages/Product';

function App() {
  return (
    <>
    <BrowserRouter>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/" component={ProductList} />
        <Route exact path="/product/:id" component={Product} />
      </Switch>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
