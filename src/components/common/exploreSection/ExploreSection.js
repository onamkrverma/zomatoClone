import React from 'react'
import ExploreCard from './exploreCard/ExploreCard'
import './exploreSection.css'

const ExploreSection = ({list,collectionName}) => {

  return (
    <div className='max-width explore-section'>
        <div className="collection-title">{collectionName} </div>
        <div className="explore-grid">
            {list.map((restaurent)=>{
                return <ExploreCard restaurent={restaurent} key={restaurent?.info?.resId} />
            })}
        </div>
    </div>
  )
}

export default ExploreSection