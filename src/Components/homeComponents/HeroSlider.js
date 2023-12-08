import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        sliderToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
  return (
    <Slider {...settings}>
      <div className='slice-item'>
        <img src="/images/slider-bgr.png" alt="slider-1" />
        <div className='slide-content content-left'>
          <h2>get all <br/>the looks </h2>
          <p>Lựa chọn là ở bạn. Hãy tự tin với chính mình! Mua sắm thoải mái không lo giá cả!</p>
          <button>Mua ngay</button>
        </div>
      </div>
      <div className='slice-item'>
        <img src="/images/slider-bgr-2.png" alt="slider-2" />
        <div className='slide-content'>
          <h2>your money <br/>your choose ! </h2>
          <p>Giảm giá siêu ưu đãi cùng Ssclothes. Nhanh tay mua ngay nhận ngay ưu đãi!</p>
          <button>Mua ngay</button>
        </div>
      </div>
    </Slider>
  )
}

export default HeroSlider