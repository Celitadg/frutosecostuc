import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContex';
import Order from './components/Order';


function App() {
  return (
    <>
    <CartContextProvider > 
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route exact path='/item/:id'>
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path='/order'>
            <Order />
          </Route>
        </Switch>
      </BrowserRouter> 
    </CartContextProvider>

    </>
  );
}

export default App;
