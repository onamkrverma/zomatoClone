import React from 'react'
import { restaurents } from '../../data/Restaurents'
import ExploreSection from '../common/exploreSection/ExploreSection'
import Filters from '../common/filters/Filters'
import './delivery.css'
import DeliveryCollections from './deliveryCollections/DeliveryCollections'
import TopBrand from './topBrand/TopBrand'

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rs-settings-sliders absolute-center"></i>,
    title: 'Filters'
  },
  {
    id: 2,
    icon: <i className="fi fi-rs-apps-sort absolute-center"></i>,
    title: 'Delivery Time'
  },
  {
    id: 3,
    title: 'Rating: 4.0+'
  },
  {
    id: 4,
    title: 'Pure Veg'
  },
  {
    id: 5,
    title: 'Safe and Hygienic'
  },
 
  {
    id: 6,
    title: 'Great Offers'
  }
]
const restaurantList = restaurents;

const Delivery = () => {
  return (
    <div>
    <div className='max-width'> 
      <Filters filtersList={deliveryFilters} />
    </div>
    <DeliveryCollections/>
    <TopBrand/>
    <ExploreSection list={restaurantList} collectionName='Order food online in India Gate' />
    </div>
  )
}

export default Delivery