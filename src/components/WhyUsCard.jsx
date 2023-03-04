import Wrench from '@/components/Wrench';
import Car from '@/components/Car';
import CarDoor from '@/components/CarDoor';
export default function WhyUsCard({ image, header, text, className }) {
	let images = [<Wrench key={3} />, <Car key={4} />, <CarDoor key={5} />];

	return (
		<div className={className}>
			<div className="flex flex-row items-center gap-6">
				{images[image]}
				<h3 className="loud-voice">{header}</h3>
			</div>
			<p className="mt-4">{text}</p>
		</div>
	);
}
