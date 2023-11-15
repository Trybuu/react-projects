import './PricingSwitch.css'

export default function PricingSwitch({ onSetPricing, pricing }) {
  return (
    <>
      <h1 className="pricing-title">Our Pricing</h1>
      <div className="pricing-switch">
        <span>Annually</span>
        <button
          className={`pricing-switch-btn ${
            pricing === 'Monthly' ? 'active' : null
          }`}
          onClick={onSetPricing}
        >
          <div className="circle"></div>
        </button>
        <span>Monthly</span>
      </div>
    </>
  )
}
