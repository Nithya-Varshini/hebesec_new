import React, { useEffect } from 'react';
import './customer.css';
import cust1 from './customer_images/cust1.png';
import cust2 from './customer_images/cust2.png';
import cust3 from './customer_images/cust3.png';
import cust4 from './customer_images/cust4.png';
import cust5 from './customer_images/cust5.png';
import cust6 from './customer_images/cust6.png';
import cust7 from './customer_images/cust7.png';
import cust8 from './customer_images/cust8.png';
import cust9 from './customer_images/cust9.png';
import cust10 from './customer_images/cust10.png';
import cust11 from './customer_images/cust11.png';
import cust12 from './customer_images/cust12.png';
import cust13 from './customer_images/cust13.png';
import cust14 from './customer_images/cust14.png';

const Scroller = () => {
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
        cust1, cust2, cust3, cust4, cust5, cust6, cust7, cust8, cust9, cust10, cust11, cust12, cust13, cust14

      ];
  
    return (
        <>
        <div className="big_font customer_header">Satisfied Customer</div>
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
  
  export default Scroller;
  