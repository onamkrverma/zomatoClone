import React from 'react'
import { nightLife } from '../../data/NightLift'
import Collection from '../common/collection/Collection'
import ExploreSection from '../common/exploreSection/ExploreSection'
import Filters from '../common/filters/Filters'
import './nightlife.css'

const collectionList = [

  {
    id: '1',
    title: 'Buzzing Nightlife & Clubs ',
    cover: 'https://b.zmtcdn.com/data/collections/8e46a581134a20b56489e22029095060_1669368003.jpg',
    place: '10 Places'

  },

]

const nightLifeFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rs-settings-sliders absolute-center"></i>,
    title: 'Filters'
  },
  {
    id: 2,
    icon: <i className="fi fi-rs-apps-sort absolute-center"></i>,
    title: 'Distance'
  },
  {
    id: 3,
    title: 'Rating: 4.0+'
  },
  
  {
    id: 4,
    title: 'Pubs & Bar'
  }
]

const nightLifeList = nightLife;

const Nigthlife = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className="max-width">
        <Filters filtersList={nightLifeFilters} />
      </div>
      <ExploreSection list={nightLifeList} collectionName="Nightlife Restaurants in India Gate" />
    </div>
  )
}

export default Nigthlife