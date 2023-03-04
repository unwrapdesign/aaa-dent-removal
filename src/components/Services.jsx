import Eyebrow from '@/components/Eyebrow';
import ServiceCard from '@/components/ServiceCard';

export default function Services({ heading }) {
	return (
		<section>
			<div className="inner-column">
				<Eyebrow>AAA Dent Repair</Eyebrow>
				<text-content class="max-w-3xl">
					<h2 className="attention-voice mb-4">{heading}</h2>
					<p className="max-w-prose">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus.
						Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo
						consectetur felis augue.
					</p>
				</text-content>

				<div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
					<ServiceCard
						service="Paintless dent repair"
						text="Sed ultricies lectus non vulputate scelerisque. Morbi eu nisl quis massa efficitur semper nec in massa semper nec in massa Morbi eu nisl quis massa efficitur."
						image={0}
					/>
					<ServiceCard
						service="Mobile dent repair"
						text="Sed ultricies lectus non vulputate scelerisque. Morbi eu nisl quis massa."
						image={1}
					/>
					<ServiceCard
						service="Door ding removal"
						text="Sed ultricies lectus non vulputate scelerisque. Morbi eu nisl quis massa efficitur semper nec in massa."
						image={2}
					/>
				</div>
			</div>
		</section>
	);
}
