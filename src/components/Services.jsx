import Eyebrow from '@/components/Eyebrow';
import ServiceCard from '@/components/ServiceCard';
import Car from './Car';
import CarDoor from './CarDoor';
import Wrench from './Wrench';

export default function Services({ heading }) {
	return (
		<section>
			<div className="inner-column">
				<Eyebrow>AAA Dent Repair</Eyebrow>
				<text-content class="max-w-3xl">
					<h2 className="attention-voice">{heading}</h2>
					<p className="mt-4 max-w-prose">
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
						svg={<Wrench />}
					/>
					<ServiceCard
						service="Mobile dent repair"
						text="Sed ultricies lectus non vulputate scelerisque. Morbi eu nisl quis massa."
						svg={<Car />}
					/>
					<ServiceCard
						service="Door ding removal"
						text="Sed ultricies lectus non vulputate scelerisque. Morbi eu nisl quis massa efficitur semper nec in massa."
						svg={<CarDoor />}
					/>
				</div>
			</div>
		</section>
	);
}
