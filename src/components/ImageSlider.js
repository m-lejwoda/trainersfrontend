import React, { useRef, useState, useEffect } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../sass/imageslider.css';
const ImageSlider = (props) => {
    
    const imagesContainerRef = useRef(null);
    const img1 = useRef()
    const img2 = useRef()
    const img1container = useRef()
    const img2container = useRef()
    const handleEl = useRef()
    const dividerEl = useRef()
    const [dragging, setDragging] = useState(false)
    let imagesContainerWidth;
    let imagesContainerLeftOffset;
    if (imagesContainerRef.current !== null) {
        imagesContainerLeftOffset = imagesContainerRef.current.offsetLeft
    }

    function adjustImagesSize() {
        if (imagesContainerRef.current !== null) {
            imagesContainerWidth = imagesContainerRef.current.offsetWidth
            imagesContainerLeftOffset = imagesContainerRef.current.offsetLeft
            img1.current.style.width = imagesContainerWidth + 'px';
            img2.current.style.width = imagesContainerWidth + 'px';
        }
        // const imagesContainerWidth = imagesContainerRef.offsetWidth;
    }
    // window.addEventListener('resize',adjustImagesSize)
    adjustImagesSize()
    function getOffset(clientX) {
        const offset = clientX - imagesContainerLeftOffset
        if (offset < 0) {
            return 0
        } else if (offset > imagesContainerWidth) {
            return imagesContainerWidth
        } else {
            return offset
        }
    }
    function move(clientX) {
        const offset = getOffset(clientX)
        const percent = offset / imagesContainerWidth * 100
        dividerEl.current.style.left = `${percent}%`
        img2container.current.style.width = `${percent}%`
    }
    return (
        <div onMouseMove={(e) => {
            if (dragging) {
                move(e.clientX)
            }
        }} onTouchMove={(e) => {
            if (dragging) {
                move(e.touches[0].clientX)
            }
        }}   className="slider">
            <div ref={imagesContainerRef} className="slider__images-container">
                <div ref={img1container} className="slider__image-container slider__image-container--first">
                    <img ref={img1} src={props.transformation.before} alt="before" draggable={false} />
                </div>
                <div ref={img2container} className="slider__image-container slider__image-container--second">
                    <img ref={img2} src={props.transformation.after} alt="after" draggable={false} />
                </div>

                <div ref={dividerEl} className="slider__divider">
                    <div onTouchStart={() => setDragging(true)} onTouchEnd={() => setDragging(false)} onMouseDown={() => setDragging(true)} onMouseUp={() => setDragging(false)} ref={handleEl} className="slider__handle">
                        <FontAwesomeIcon icon={faChevronLeft} color={"black"} />
                        <FontAwesomeIcon icon={faChevronRight} color={"black"} />
                    </div>
                </div>
                <div className="slider__kgdiff" style={props.transformation.kg_diff > 0 ? {color:"red"}: {color:'green'}}>
                    {props.transformation.kg_diff} kg
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;