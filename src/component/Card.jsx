import React from 'react'

const Card = ({ userName, image, about, feedback, YTshotslink }) => {
  return (
    <div className="card">
        <div className="feedback-text-container">
            <p>{feedback}</p>
        </div>
        <div className="feedback-consumer-container">
            <div className="feedback-consumer-img">
                <img src={image} alt={userName + " profile picture"}></img>
            </div>
            <div className="feedback-consumer-info">
                <h4>{userName}</h4>
                <p>{about}</p>
            </div>
            <a href={YTshotslink}><i className="fa-brands fa-youtube"></i></a>
        </div>
    </div>
  )
}

export default Card
