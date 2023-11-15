import { useState } from 'react'

import BackButton from '../../components/BackButton/BackButton'

import PricingSwitch from './PricingSwitch/PricingSwitch'
import PricingCard from './PricingCard/PricingCard'
import bgBottom from '../../assets/pricing-component files/images/bg-bottom.svg'
import bgTop from '../../assets/pricing-component files/images/bg-top.svg'
import './PricingComponent.css'

const PRICES = [
  {
    planName: 'Basic',
    price: {
      monthly: 19.99,
      annually: 199.99,
    },
    storageGb: 500,
    users: 2,
    sendUpGb: 3,
    link: '#',
  },
  {
    planName: 'Professional',
    price: {
      monthly: 24.99,
      annually: 249.99,
    },
    storageGb: 1000,
    users: 5,
    sendUpGb: 10,
    link: '#',
  },
  {
    planName: 'Master',
    price: {
      monthly: 39.99,
      annually: 399.99,
    },
    storageGb: 2000,
    users: 10,
    sendUpGb: 20,
    link: '#',
  },
]

export default function PricingComponent() {
  const [pricing, setPricing] = useState('Monthly')

  function handlePricingSwitch() {
    setPricing(pricing === 'Monthly' ? 'Annually' : 'Monthly')
  }

  return (
    <>
      {/* <BackButton /> */}
      <div id="pricing-component">
        <PricingSwitch onSetPricing={handlePricingSwitch} pricing={pricing} />
        <div className="pricing-cards">
          {PRICES.map((plan) => {
            return (
              <PricingCard data={plan} pricing={pricing} key={plan.planName} />
            )
          })}
        </div>
        {/* // Images for decoration */}
        {/* // --------------------- */}
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
    </>
  )
}
