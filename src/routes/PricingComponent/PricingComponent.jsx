import PricingSwitch from './PricingSwitch/PricingSwitch'

import bgBottom from '../../assets/pricing-component files/images/bg-bottom.svg'
import './PricingComponent.css'

export default function PricingComponent() {
  return (
    <div id="pricing-component">
      <img src={bgBottom} alt="" />
      <PricingSwitch />
    </div>
  )
}
