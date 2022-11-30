import React from 'react'
import './filtersItems.css'
const FiltersItems = ({filter}) => {
  return (
    <div className='filters-items' >
        {filter.icon && filter.icon }
        <div className='filter-name'>{filter.title} </div>
    </div>
  )
}

export default FiltersItems