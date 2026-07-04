import React from 'react';
import CartItem from './CartItem'

const Cart = () => {
  const navigate=useNavigate();
  const handleCheckout=()=>{
    navigate("./checkout?step=2")
  }
  return (
    <div>
      <div className=' lg:grid grid-col-3 lg:px-16 relative'>
        <div className='col-span-2'>
          {[1,1,1,1].map(item) => <CartItem/>}
        </div>

        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border'></div>
          <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
          <hr />
           
          <div className='space-y-3 font-semibold'>
            <div className='flex justify-between pt-3 text-black'>
              <span>Price</span>
              <span>$265</span>
            </div>

            <div className='flex justify-between pt-3 text-green'>
              <span>Discount</span>
              <span>50%</span>
            </div>

            <div className='flex justify-between pt-3 text-green'>
              <span>Delivery Cahrges</span>
              <span>Free</span>
            </div>

            <div className='flex justify-between pt-3 text-green'>
              <span>Total Amount</span>
              <span className='text-green'>$1278</span>
            </div>

          </div>

          <Button onClick={handleCheckout} Variant = "cointained "className='w:full mt-5 ' sx={{px:"2rem", py:"1rem", bgcolor:"#9155fd"}}>
            Add To Cart
          </Button>
        </div>
      </div>

    </div>
  )
}

export default Cart