import React from 'react'
import Card from './Card'

const Feedback = () => {
	const testimonials = [
        {
            id: 1,
            name: 'Ashok Ghosh',
            image: 'https://static6.depositphotos.com/1003580/615/i/450/depositphotos_6151014-stock-photo-african-american-man-portrait.jpg',
			about: 'Resident of Madhupur',
			feedback: 'This is a great store with a wide variety of products. The staff is friendly and helpful. Highly recommend!',
			YTshotslink: 'https://youtube.com/shorts/oOdARic5wvg?si=SGP__460lc1eWGfB',
		},
        {
            id: 2,
            name: 'Bimal Das',
            image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=689',
			about: 'Resident of Simlon',
			feedback: 'I love shopping here! The prices are competitive and the quality of products is top-notch. Will definitely be coming back.',
			YTshotslink: 'https://youtube.com/shorts/wJK2qp9AXUA?si=wOhPTjxJIIZsoZGX',
        },
        {
            id: 3,
            name: 'Chandan Saha',
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880',
			about: 'Resident of Guptipur',
			feedback: 'Shopping at Annapurna Store has been a wonderful experience. The owner is knowledgeable and always willing to assist. Highly recommend to everyone!',
			YTshotslink: 'https://youtube.com/shorts/1IvRkuzZXs8?si=KXFTGcBYVBOIzVNn',
        }
    ];
	return (
	<section id="testimonials">
		<div className="container">
			<h2><span>Consumer's</span> Feedback</h2>
			<div className="flex-container">
				<p>Read testimonials from our satisfied customers who have experienced the quality and convenience of shopping at Annapurna Store.</p>
				<div className="feedback-container">
					{testimonials.map(user => (
						<Card key={user.id} userName={user.name} image={user.image} about={user.about} feedback={user.feedback} YTshotslink={user.YTshotslink} />
					))}
				</div>
			</div>
		</div>
	</section>
	)
}

export default Feedback
