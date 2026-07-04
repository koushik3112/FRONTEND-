import {stepper} from '@mui/material'
import React from 'react'

const steps=[
    "Placed",
    "Order Cinfirmend",
    "Shipped",
    "Out for Delivery",
    "Delivered"
]
const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <stepper activeStep={activeStep} alternativeLabel>
{steps.map((label)=> <step>
    <stepLabel sx={{color: "#9155fd", fontsize:"44px"}}>
        {label}
    <stepLabel/>
</step>)}        
        </stepper>
    </div>
  )
}

export default OrderTracker
