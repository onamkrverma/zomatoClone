import React from 'react'
import { diningOut } from '../../data/DiningOut'
import Collection from '../common/collection/Collection'
import ExploreSection from '../common/exploreSection/ExploreSection'
import Filters from '../common/filters/Filters'
import './dingingOut.css'

const collectionList =[
  {
    id:'1',
    title: 'Top 10 Picks of The Week ',
    cover: 'https://b.zmtcdn.com/data/collections/e74446b88e430faf51624a90fe6d6826_1669725817.jpg',
    place: '10 Places'

  },
  {
    id:'2',
    title: 'Top 15 Romantic Dining Places ',
    cover: 'https://b.zmtcdn.com/data/collections/a9e8377fce9b702add08c5305100f8ec_1669367619.jpg',
    place: '15 Places'

  },
  {
    id:'3',
    title: '10 Must Visit Hidden Gems ',
    cover: 'https://b.zmtcdn.com/data/collections/6b3b1a3f4ce09d41d7fd8c6474404dfe_1669636681.jpg',
    place: '10 Places'

  },
  {
    id:'4',
    title: 'Top 15 Chic Newcomers ',
    cover: 'https://b.zmtcdn.com/data/collections/a2bc0f72fe1a576f5f39f656c0935ebc_1669618389.jpg',
    place: '15 Places'

  },
  {
    id:'5',
    title: 'Top 5 Celebrity Owned Places ',
    cover: 'https://b.zmtcdn.com/data/collections/22a58dffe18c5951b87ff005bce00ebe_1668152620.jpg',
    place: '5 Places'

  },
  {
    id:'6',
    title: 'Buzzing Nightlife & Clubs ',
    cover: 'https://b.zmtcdn.com/data/collections/8e46a581134a20b56489e22029095060_1669368003.jpg',
    place: '10 Places'

  },
  {
    id:'7',
    title: 'Live Football Screening ',
    cover: 'https://b.zmtcdn.com/data/collections/09196633321daeff3f97bf99c02162bc_1669358951.jpg',
    place: '15 Places'

  },
]

const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rs-settings-sliders absolute-center"></i>,
    title: 'Filters'
  },
  {
    id: 2,
    title: 'Rating: 4.0+'
  },
  {
    id: 3,
    title: 'Outdoor Seating'
  },
  
  {
    id: 4,
    title: 'Serves Alcohol'
  },
  {
    id: 5,
    title: 'Open Now'
  }
]

const diningList = diningOut;

const DingingOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filtersList={diningFilters} />
      </div>
      <ExploreSection list={diningList} collectionName="Best Dining Restaurants near you in India Gate" />
    </div>
  )
}

export default DingingOut