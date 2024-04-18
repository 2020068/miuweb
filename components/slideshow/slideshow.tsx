/** @format */

import React, { useEffect } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.min.js";
import "../styles/slide.css";
import Swiper from "swiper";

const SlideShow: React.FC = () => {
  useEffect(() => {
    const swiper = new Swiper("..swiper-container", {
      // Swiper options here...
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <div className='slide-container swiper'>
      <div className='slide-content'>
        <div className='card-wrapper swiper-wrapper'>
          <div className='card swiper-slide'>
            <div className='image-content'>
              <span className='overlay'></span>
              <div className='card-image'>
                <img
                  src='../../public/images/slideimg/profile1.jpg'
                  alt=''
                  className='card-img'
                />
              </div>
            </div>

            <div className='card-content'>
              <h2 className='name'>CS teacher</h2>
              <p className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum, arcu vitae consequat molestie, ligula ipsum viverra
                mi, sit amet suscipit odio quam sit amet sapien. Donec vel nunc
                vitae arcu ultricies sollicitud
              </p>

              <button className='button'>View more</button>
            </div>
          </div>
          <div className='card swiper-slide'>
            <div className='image-content'>
              <span className='overlay'></span>
              <div className='card-image'>
                <img
                  src='../../public/images/slideimg/profile2.jpg'
                  alt=''
                  className='card-img'
                />
              </div>
            </div>

            <div className='card-content'>
              <h2 className='name'>CS teacher</h2>
              <p className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum, arcu vitae consequat molestie, ligula ipsum viverra
                mi, sit amet suscipit odio quam sit amet sapien. Donec vel nunc
                vitae arcu ultricies sollicitud
              </p>

              <button className='button'>View more</button>
            </div>
          </div>
          <div className='card swiper-slide'>
            <div className='image-content'>
              <span className='overlay'></span>
              <div className='card-image'>
                <img
                  src='../../public/images/slideimg/profile3.jpg'
                  alt=''
                  className='card-img'
                />
              </div>
            </div>

            <div className='card-content'>
              <h2 className='name'>CS teacher</h2>
              <p className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum, arcu vitae consequat molestie, ligula ipsum viverra
                mi, sit amet suscipit odio quam sit amet sapien. Donec vel nunc
                vitae arcu ultricies sollicitud
              </p>

              <button className='button'>View more</button>
            </div>
          </div>
          <div className='card swiper-slide'>
            <div className='image-content'>
              <span className='overlay'></span>
              <div className='card-image'>
                <img
                  src='../../public/images/slideimg/profile4.jpg'
                  alt=''
                  className='card-img'
                />
              </div>
            </div>

            <div className='card-content'>
              <h2 className='name'>CS teacher</h2>
              <p className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum, arcu vitae consequat molestie, ligula ipsum viverra
                mi, sit amet suscipit odio quam sit amet sapien. Donec vel nunc
                vitae arcu ultricies sollicitud
              </p>

              <button className='button'>View more</button>
            </div>
          </div>
          <div className='card swiper-slide'>
            <div className='image-content'>
              <span className='overlay'></span>
              <div className='card-image'>
                <img
                  src='../../public/images/slideimg/profile5.jpg'
                  alt=''
                  className='card-img'
                />
              </div>
            </div>

            <div className='card-content'>
              <h2 className='name'>CS teacher</h2>
              <p className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum, arcu vitae consequat molestie, ligula ipsum viverra
                mi, sit amet suscipit odio quam sit amet sapien. Donec vel nunc
                vitae arcu ultricies sollicitud
              </p>

              <button className='button'>View more</button>
            </div>
          </div>
        </div>
      </div>
      <div className='swiper-button-next swiper-navBtn'></div>
      <div className='swiper-button-prev swiper-navBtn'></div>
      <div className='swiper-pagination'></div>
    </div>
  );
};

export default SlideShow;
