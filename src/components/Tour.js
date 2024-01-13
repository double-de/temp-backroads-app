import React from 'react'

const Tour = (props) => {
  const { image, title, date, text, country, days, price } = props
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={image} className='tour-img' alt={title} />
        <p className='tour-date'>{date}</p>
      </div>
      <div className='tour-info'>
        <h4>{title}</h4>
        <p>{text}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>{' '}
            {` ${country}`}
          </p>
          <p>{`${days} days`}</p>
          <p>{`from $${price}`}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour
