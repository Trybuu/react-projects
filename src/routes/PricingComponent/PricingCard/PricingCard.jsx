import './PricingCard.css'

export default function PricingCard({ data, pricing }) {
  return (
    <div className="pricing-card">
      <span className="pricing-card-text">{data.planName}</span>
      <span className="pricing-card-text price">
        ${pricing === 'Monthly' ? data.price.monthly : data.price.annually}
      </span>
      <span className="pricing-card-text border-top">
        {data.storageGb} GB Storage
      </span>
      <span className="pricing-card-text border-top">
        {data.users} user Allowed
      </span>
      <span className="pricing-card-text border-top">
        Send up to {data.sendUpGb} GB
      </span>
      <a className="pricing-card-link" href="#">
        Learn More
      </a>
    </div>
  )
}
