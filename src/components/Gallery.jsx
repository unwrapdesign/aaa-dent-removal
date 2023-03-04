import Button from './Button';
import Eyebrow from './Eyebrow';
import GalleryShowcase from './GalleryShowcase';

export default function Gallery({ eyebrow, header, text }) {
	return (
		<section>
			<div className="inner-column">
				<text-content class="mb-12">
					<Eyebrow>{eyebrow}</Eyebrow>
					<h2 className="attention-voice max-w-prose">{header}</h2>
					<p className="mt-4 mb-4 max-w-prose">{text}</p>
					<Button href="/contact">View More</Button>
				</text-content>

				<GalleryShowcase></GalleryShowcase>
			</div>
		</section>
	);
}
