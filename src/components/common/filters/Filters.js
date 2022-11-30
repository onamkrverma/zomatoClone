import React from 'react'
import './filters.css'
import FiltersItems from './filtersItems/FiltersItems'

const Filters = ({filtersList}) => {
  return (
    <div className='filters' >
        {filtersList &&
         filtersList.map((filter)=>{
            return <FiltersItems filter={filter} key={filter.id}/>
        })}
    </div>
  )
}

export default Filters