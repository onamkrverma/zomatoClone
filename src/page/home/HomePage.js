import React, { useState } from 'react'
import Footer from '../../components/common/footer/Footer'
import Header from '../../components/common/header/Header'
import TapOpt from '../../components/common/tapOptions/TapOpt'
import Delivery from '../../components/delivery/Delivery'
import DingingOut from '../../components/diningOut/DingingOut'
import Nigthlife from '../../components/nightlife/Nigthtlife'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Delivery')

  const getCorrectScreen = (tab) =>{
    switch(tab){
      case "Delivery":
        return <Delivery/>
      case "Dining Out":
        return <DingingOut/>
      case "Nightlife":
        return <Nigthlife/>
      default:
        return <div>Delivery</div>
    }
  }
  return (
    <div>
      <Header/>
      <TapOpt activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer/>
    </div>
  )
}

export default HomePage