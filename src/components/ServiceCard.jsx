import Wrench from '@/components/Wrench';
import Car from '@/components/Car';
import CarDoor from '@/components/CarDoor';
export default function ServiceCard({ service, text, svg }) {
	return (
		<service-card class="relative flex flex-col gap-6 border border-slate-200 bg-slate-50 px-7 py-7 before:absolute before:-right-[10px] before:-top-[10px] before:-z-10 before:h-[90px] before:w-[90px] before:bg-sky-800">
			{svg}
			<text-content>
				<h3 className="loud-voice">{service}</h3>
				<p className="mt-3">{text}</p>
			</text-content>
		</service-card>
	);
}
