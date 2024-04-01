import React, { useEffect } from 'react';
import './customer.css';
// import certi1 from '../certificates/certi1.png';
import certi2 from '../certificates/certi2.png';
import certi3 from '../certificates/certi3.png';
import certi4 from '../certificates/certi4.png';
import certi5 from '../certificates/certi5.png';
import certi6 from '../certificates/certi6.png';
import certi7 from '../certificates/certi7.png';
import certi8 from '../certificates/certi8.png';
import certi9 from '../certificates/certi9.png';
import certi10 from '../certificates/certi10.png';


const Certificates = () => {
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
        certi2, certi3, certi4, certi5, certi6, certi7, certi8, certi9, certi10

      ];
  
    return (
        <>
        <div className="big_font customer_header">OUR ACCREDITATIONS
</div>
<div className="small_font" style={{display:"flex",justifyContent:"center",textAlign:"center",margin:"20px 90px"}}>We aspire to be a leading force in Global market for Cyber Security and Training Services. Our strategy involves educating business professionals about cyber threats, deploying cutting-edge technology for effective defense, and offering 24/7 remote and on-site support in the battle against cybercrime.</div>
                    
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
  
  export default Certificates;
  