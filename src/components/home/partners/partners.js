import React, { useEffect } from 'react';
import './partners.css';
// import certi1 from '../certificates/certi1.png';
import partner1 from './images/partner1.png';
import partner2 from './images/partner2.png';
import partner3 from './images/partner3.png';
import partner4 from './images/partner4.png';
import partner5 from './images/partner5.png';



const Partners = () => {
    useEffect(() => {
      const scrollers = document.querySelectorAll(".scroller");
  
      // If a user hasn't opted in for reduced motion, then we add the animation
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
      }
  
      function addAnimation() {
        scrollers.forEach((scroller) => {
          // add data-animated="true" to every `.scroller` on the page
          scroller.setAttribute("data-animated", true);
  
          // Make an array from the elements within `.scroller-inner`
          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner.children);
  
          // For each item in the array, clone it
          // add aria-hidden to it
          // add it into the `.scroller-inner`
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        });
      }
    }, []);

    const partnerImages = [
        partner1, partner2, partner3, partner4, partner5


      ];
  
    return (
        <>
        <div className="big_font customer_header">OUR Partners
</div>
                    
      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
        {partnerImages.map((partner, index) => (
            <div className='customer_image_container'>
        <img key={index} src={partner} alt={`partner${index + 1}`} className='customer_image'/>
      </div>))}
        </div>
      </div>
      </>
    );
  };
  
  export default Partners;
  