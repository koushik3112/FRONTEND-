import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation'
import homepage from './customer/pages/homepage/homepage'
import footer from './customer/components/footer/footer'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import CheckOut from './customer/components/CheckOut/'



function App() {
  return (
    <div className="">
      <navigation />
      <Routes>
        <Route path='/*' element={<CustomerRouters />}><Route />

        <Routes/>
        <div>
          <homepage/>
        </div>
        <div>
          {/* <homepage/> */}
          {/* <Product/> */}
          {/* <ProductDetails/> */}
          {/* <cart/> */}
          {/* <cCheckOut/> */}
          {/* <order/> */}
          {/* <OrderDetails/> */}

        </div>
    </div>
  );
}

export default App;
