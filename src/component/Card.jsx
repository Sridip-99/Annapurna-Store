import React from 'react'

const Card = () => {
  return (
    <div className="card">
        <div className="feedback-text-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi repellat tempore enim iste veritatis ab rem earum libero asperiores eos incidunt nemo fugit at, ducimus officia animi omnis excepturi.</p>
        </div>
        <div className="feedback-consumer-container">
            <div className="feedback-consumer-img">
                <img src="https://static6.depositphotos.com/1003580/615/i/450/depositphotos_6151014-stock-photo-african-american-man-portrait.jpg" alt=""></img>
            </div>
            <div className="feedback-consumer-info">
                <h4>Ashok Ghosh</h4>
                <p>Resident of Madhupur</p>
            </div>
            <a href="https://youtube.com/shorts/Wf893CqbDa4?si=uqZMJhILZ3meAQar"><i className="fa-brands fa-youtube"></i></a>
        </div>
    </div>
  )
}

export default Card