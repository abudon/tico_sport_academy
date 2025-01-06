import React, {useEffect, useRef, useState} from 'react';
import Slider from 'react-slick'


function Carousel() {
    const [carousel, setCarousel] = useState(null);
    const [navcarousel, setNavCarousel] = useState(null);
    let slider_ref1 = useRef(null);
    let slider_ref2 = useRef(null);

    useEffect(() => {
        setCarousel(slider_ref1);
        setNavCarousel(slider_ref2);
    }, []);


    return (
        <div>
                <div className="slider-container">
                    <h2>Slider Syncing (AsNavFor)</h2>
                    <h4>First Slider</h4>
                    <Slider asNavFor={navcarousel} ref={slider => (slider_ref1 = slider)}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                    <h4>Second Slider</h4>
                    <Slider
                        asNavFor={carousel}
                        ref={slider => (slider_ref2 = slider)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    >
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
        </div>
    )
}

export default Carousel

