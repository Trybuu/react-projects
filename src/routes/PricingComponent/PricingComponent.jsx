import { useState } from 'react'

import PricingSwitch from './PricingSwitch/PricingSwitch'
import bgBottom from '../../assets/pricing-component files/images/bg-bottom.svg'
import bgTop from '../../assets/pricing-component files/images/bg-top.svg'
import './PricingComponent.css'

export default function PricingComponent() {
  const [pricing, setPricing] = useState('Monthly')

  function handlePricingSwitch() {
    setPricing(pricing === 'Monthly' ? 'Annually' : 'Monthly')
  }

  return (
    <div id="pricing-component">
      <PricingSwitch onSetPricing={handlePricingSwitch} pricing={pricing} />
      <img
        src={bgBottom}
        alt="stripes - decoration"
        className="decoration-img bottom"
      />
      <img
        src={bgTop}
        alt="stripes - decoration"
        className="decoration-img top"
      />
    </div>
  )
}
