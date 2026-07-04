import React from 'react'
import Cart from '../customer/components/cart/cart'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'

const CustomerRouter = () => {
  return (
    <div>
        <div>
            
                
            </div>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
                <Route path='/product/:productId' element={<ProductDetails/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/account/order' element={<Order/>}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>

        
            {/* <order/> */}
            {/* <OrderDetails/> */}
            </Routes>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters