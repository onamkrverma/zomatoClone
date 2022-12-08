import React from 'react'
import Slider from 'react-slick'
import NextArrow from '../carousel/NextArrow';
import PrevArrow from '../carousel/PrevArrow';
import './collection.css'

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>,
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1.4,
        
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3.5,
        
      }
    },
]
  
  
};

const Collection = ({ list }) => {
  return (
    <div className='collection-wrapper'>
      <div className="max-width collection">
        <div className="collection-title">Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
          </div>
          <div className="collection-location">
            <div>All collections in Delhi NCR</div>
            <i className="fi fi-rs-caret-right absolute-center"></i>
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item)=>(
            <div key={item.id}>
              <div className="collection-cover" >
                <img src={item.cover} className="collection-image" alt={item.title} />
                <div className="gradient-bg"></div>
                <div className="collection-card-title">{item.title}</div>
                <div className="collection-card-subtitle">
                  <div className="place-number">{item.place}</div>
                  <i className="fi fi-rs-caret-right absolute-center"></i>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Collection