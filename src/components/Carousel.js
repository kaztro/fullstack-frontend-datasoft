import React from 'react'
import banner from '../assets/imgs/banner.jpg';

export default function Carousel() {
  return (
    <div>
<div id="carouselExample" classNameName="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner} className="d-block w-100" alt="banner.jpg" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
