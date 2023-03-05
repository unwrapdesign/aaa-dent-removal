import Button from './Button';
import Eyebrow from './Eyebrow';
import Review from './Review';

export default function Testimonials({ eyebrow, header, text, location }) {
	// $todo: make reviews based off location page.
	let reviews = [
		{
			name: 'John Doe',
			location: 'Sacramento, CA',
			review: 'I have used Unwrap service for about four years. I describe myself very picky and difficult to be pleased. Exceeded my expectations.',
		},
		{
			name: 'Mark Low',
			location: 'Roseville, CA',
			review: 'I have used Unwrap service for about four years. I describe myself very picky and difficult to be pleased. Exceeded my expectations.',
		},
		{
			name: 'Robert Henrich',
			location: 'Jacksonville, FL',
			review: 'Their knowledge, expertise, advice and confidence gave me courage, belief and strength needed to help me go through my Office cleaning. ',
		},
		{
			'Rocklin Doe': {
				location: 'Rocklin, CA',
				review: 'I have used Unwrap service for about four years. I describe myself very picky and difficult to be pleased. Exceeded my expectations.',
			},
			'Low Rocklin': {
				location: 'Rocklin, CA',
				review: 'I have used Unwrap service for about four years. I describe myself very picky and difficult to be pleased. Exceeded my expectations.',
			},
			'Rock Lin': {
				location: 'Rocklin, CA',
				review: 'Their knowledge, expertise, advice and confidence gave me courage, belief and strength needed to help me go through my Office cleaning. ',
			},
		},
		{
			'Jack Doe': {
				location: 'Jacksonville, FL',
				review: 'I have used Unwrap service for about four years. I describe myself very picky and difficult to be pleased. Exceeded my expectations.',
			},
			'Low Jack': {
				location: 'Jacksonville, FL',
				review: 'I have used Unwrap service for about four years. I describe myself very picky and difficult to be pleased. Exceeded my expectations.',
			},
			'Jack Son': {
				location: 'Jacksonville, FL',
				review: 'Their knowledge, expertise, advice and confidence gave me courage, belief and strength needed to help me go through my Office cleaning. ',
			},
		},
	];
	return (
		<section>
			<div className="inner-column">
				<div>
					<Eyebrow>{eyebrow}</Eyebrow>
					<h2 className="attention-voice">{header}</h2>
					<p className="mt-6 max-w-prose">{text}</p>
				</div>
				<div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
					<Review
						review="Their knowledge, expertise, advice andeeded to help me go through my Office cleaning."
						name="Robert Henrich"
						location="Rocklin, CA"
					/>
					<Review
						review="Their knowledge, expertise, advice and confidence gave me courage, belief and strength needed to help me go through my Office cleaning. and confidence gave me courage, belief and strength needed to help me go through my Office cleaning."
						name="Brent Kindle"
						location="Jacksonville, FL"
					/>
					<Review
						review="Their knowledge, expertise, advice and confidence gave me courage, belief and strength needed to help me go through my Office cleaning."
						name="Alex Smith"
						location="Sacramento, CA"
					/>
				</div>
				<div className="mt-12 flex justify-center">
					<Button href="/reviews">Read More</Button>
				</div>
			</div>
		</section>
	);
}
