import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onclick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg shadow-md hover:shadow-2xl border: '>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item sx={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70" alt="" />
                    <div className='ml-5 space-y-2'>
                        <p className=''>Mens Slim Mid Rise Jeans</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </div>
            </Grid>

            <Grid item sx={2}>
                <p>$1099</p>

            </Grid>
            
            <Grid item sx={4}>
                {true && <div>
                    <p>
                        <AdjustIcon xs={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                        <span>
                            Delivered On March 03 
                        </span>
                     </p>
                     <p className='text-xm'> Your Item has Been Delivered</p>
                    <div/> }

                {false && <p>
                    <span>
                        Expected delivery on MArch 03
                    </span>
                </p>}

            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard