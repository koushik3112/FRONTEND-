import React from 'react';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CartItem = () => {
  return (
    <div className=" p-5 shadow-lg border rounded-md">
        <div className='flex item-center'>
            <div className='w-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className="w-full h-full objectcover object-top" src="https://rukminim1.flixcart.com/image/612/612/kb1470w0/jean/x/r/a/30-11274626-roadster-original-imafsgsthk6gdpjg.jpeg?q=70" alt="" />
            </div>

        </div>
      <div className="ml-5 space-y-1 ">
        <p className='font-semibold'>Mens white Slim Mid Rise Jeans</p>
        <p className='opcaity-70'>Size : L, White</p>
        <p className='opacity-70'>Seller : Crishtiallo ZFashion</p>
        <div className="flex space-x-5 items-center text-lg lg:text-x1 text-gray-900 mt-6 ">

            <p className="font-Semibold">$199.00</p>
            <p className="opacity-50 line-through">$211.00</p>
            <p className="text-green-600 font-semibold">5% OFF</p>
      </div>
      </div>
      <div className="lg:flex item-center lg-space-x-10 pt-4">
        <div className='flex item-center space-x-2'>
          
          <span className=' py-1 px-7 border rounded-sm'></span>
            <IconButton sx={{bgcolor:"RGB(145 85 253 )" }}>
             <AddCircleOutlineIcon/>
           </IconButton>
        </div>

        <div className=''>
          <Button sx={{color:RGB(145 85 253)}}>remove</Button>
        </div>

      </div>
    </div> 
  )
}

export default CartItem