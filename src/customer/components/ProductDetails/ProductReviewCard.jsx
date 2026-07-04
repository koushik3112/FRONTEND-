import { Grid } from '@mui/system'
import react from 'react'

const ProductReviewcard =()=> {
    return (
        <div>
            <Grid cointainer spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar ClassName='text-white' sx={{width: 56, height:56, bgcolor:#9155fd}}>
                            
                        </Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div ClassName="space-y-2">
                        <p>Ram</p>
                        <p classNmae="opacity:70">April 5, 2025</p>

                    </div>
                    <Rating value = {4.5} name='half-rating' readonly precision={0.5}/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam dolorum rerum ?</p>
                </Grid>iosa
            </Grid>

        </div>
    )
}

export default ProductReviewcard