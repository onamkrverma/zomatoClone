import React, { useState } from 'react'
import './exploreOpt.css'

const exploreOptList = [
    {
        id:'1',
        title: "Popular cuisines near me",
        content : 'Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Chinese food near me, Continental food near me, Desserts food near me, Italian food near me, Kebab food near me, Mithai food near me, Momos food near me, Mughlai food near me, North Indian food near me, Pasta food near me, Pizza food near me, Rolls food near me, Sandwich food near me, Shake food near me, South Indian food near me, Street food near me'
    },
    {
        id:'2',
        title: "Popular restaurant types near me",
        content : 'Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Chinese food near me, Continental food near me, Desserts food near me, Italian food near me, Kebab food near me, Mithai food near me, Momos food near me, Mughlai food near me, North Indian food near me, Pasta food near me, Pizza food near me, Rolls food near me, Sandwich food near me, Shake food near me, South Indian food near me, Street food near me'
    },
    {
        id:'3',
        title: "Top Restaurant Chains",
        content : 'Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Chinese food near me, Continental food near me, Desserts food near me, Italian food near me, Kebab food near me, Mithai food near me, Momos food near me, Mughlai food near me, North Indian food near me, Pasta food near me, Pizza food near me, Rolls food near me, Sandwich food near me, Shake food near me, South Indian food near me, Street food near me'
    },
    {
        id:'4',
        title: "Cities We Deliver To",
        content : 'Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Chinese food near me, Continental food near me, Desserts food near me, Italian food near me, Kebab food near me, Mithai food near me, Momos food near me, Mughlai food near me, North Indian food near me, Pasta food near me, Pizza food near me, Rolls food near me, Sandwich food near me, Shake food near me, South Indian food near me, Street food near me'
    }
]

const ExploreOpt = () => {
    const [isActiveIndex, setisActiveIndex] = useState(false)
   
    const handleClick = (indexClick)=>{
        if(isActiveIndex === indexClick){
            return setisActiveIndex(null)
        }
        setisActiveIndex(indexClick)
    }


  return (
    <div className='explore-option-wrapper'>
        <div className='explore-option max-width'>
        <div className="collection-title">Explore options near me</div>
       
            {exploreOptList.map((item,index)=>{
                return ( 
                <div className="options cur-point" key={item.id} onClick={()=>handleClick(index)}>
                    <div className="option-title "  >
                    <div>{item.title}</div>
                    <i className={`fi fi-rs-${isActiveIndex === index?'angle-up':'angle-down'} absolute-center explore-options-icon`}></i>
                    </div>
                   { isActiveIndex === index &&  <div className="option-content" >
                    {item.content}
                    </div>}
                </div>
                )
            })}
    </div>
    </div>
  )
}

export default ExploreOpt