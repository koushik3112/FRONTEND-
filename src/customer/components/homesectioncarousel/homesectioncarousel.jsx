import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const homesectioncarousel = () => {
    const [activeIndex, setrIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items: 5.5 },

    };


    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = {(Item)}=> setActiveIndex(item)
}
const items = [1, 1, 1, 1, 1, 1, 1, 1].map((item) => <homesectioncard />)  // DATA OF MENS KURTA
return (
    <div className='border'>
        <h2 className="text-2x1 font-extrabold text-gray-800 px-5">{sectionName}</h2>
        <div className='relative px-5 '>
            <AliceCarousel
                mouseTracking
                items={items}
                disableButtonControls
                onsSlideChanged={syncActiveIndex}
                activeIndex={activeIndex}
                infinite
                responsive={responsive}
            />
            {activeIndex != 0 && <Button varient="content" className="z-50 bg-white" onClick={slideNext} sx={{ position: 'absolute', top: '8rem', right: '0re', Transform: "translate(50%) rotate(90deg) " }} color:"white" ariel-label="next">
            <KeyboardArrowLeftIcon sx=transform:"rotate(-90deg)", bgcolor:"black"/> }
        </Button>

        <Button varient="content" className="z-50 bg-white" onClick={slidePrev} sx={{ position: 'absolute', top: '8rem', left: '0rem', Transform: "translate(50%) rotate(-90deg) " }} color:"white" ariel-label="next">
        <KeyboardArrowLeftIcon sx=transform:"rotate(-90deg)", bgcolor:"black"/>
    </Button>
            </div >
        </div >
    );
};

export default homesectioncarousel;   