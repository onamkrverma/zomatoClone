import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/NextArrow';
import PrevArrow from '../../common/carousel/PrevArrow';
import './topBrand.css'

const topBrandList = [
  {
    id: 1,
    time: '20 min',
    name: "McDonald's",
    cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png'
  },
  {
    id: 2,
    time: '30 min',
    name: "Domino's Pizza",
    cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png'
  },
  {
    id: 3,
    time: '29 min',
    name: "Burger King",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png"
  },
  {
    id: 4,
    time: '28 min',
    name: "KFC",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png"
  },
  {
    id: 5,
    time: '25 min',
    name: "Subway",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png"
  },
  {
    id: 6,
    time: '25 min',
    name: "PiZZa Hut",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png"
  },
  {
    id: 7,
    time: '24 min',
    name: "Haldiram's",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png"
  }
]

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 3,
        
      }
    }
]
};

const TopBrand = () => {
  return (
    <div className='top-brand max-width'>
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandList.map((brand) => {
          return (
            <div key={brand.id}>
              <div className="image-text-center">
            <div className='top-brand-cover ' >
              <img src={brand.cover} alt={brand.name} className="top-brand-image" />
            </div>
            <div className='top-brand-name'>{brand.name}</div>
            <div className="top-brand-time">{brand.time}</div>
            </div>
            </div>


          )
        })}
      </Slider>
    </div>
  )
}

export default TopBrand