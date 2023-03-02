import Button from '@/components/Button';
import Checkmark from '@/components/Checkmark';

export default function Landing() {
	return (
		<>
			<picture className="absolute inset-0 -z-10 block h-full w-full before:pointer-events-none before:absolute before:z-10 before:h-full before:w-full before:bg-black before:opacity-75">
				<img
					className="h-full object-cover"
					src="https://ucarecdn.com/5c26c24e-4340-41d5-858d-6505b80debcb/"
					alt=""
				/>
			</picture>
			<text-content class="py-36">
				<h1 className="title-voice mb-8 text-slate-50">AAA Dent Removal</h1>
				<p className="mb-8 max-w-xl text-xl text-slate-50">
					Offering comprehensive mobile dent repair services. We’ll drive to wherever you are and help remove
					any dents you have in your car with our paintless dent repair services.
				</p>

				<ul className="className mb-8 space-y-4 text-xl text-slate-50">
					<li className="flex items-center gap-2 font-medium">
						<Checkmark />
						Paintless dent repair
					</li>
					<li className="flex items-center gap-2 font-medium">
						<Checkmark />
						Mobile dent repair
					</li>
					<li className="flex items-center gap-2 font-medium">
						<Checkmark />
						Door ding removal
					</li>
					<li className="flex items-center gap-2 font-medium">
						<Checkmark />
						Hail dent repair
					</li>
					<li className="flex items-center gap-2 font-medium">
						<Checkmark />
						Drives to you
					</li>
				</ul>
				<Button href="/contact">FREE Estimate</Button>
			</text-content>
		</>
	);
}
