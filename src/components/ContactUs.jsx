import { Button } from './Button';
import Eyebrow from './Eyebrow';

export default function ContactUs({ eyebrow, header, text, buttonText, buttonTextTwo }) {
	return (
		<section id="contact-us" className="relative  bg-secondary-900">
			<div
				className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden 
            before:absolute before:-top-[105px] before:ml-[200px] before:block before:h-[600px] before:w-[150px] before:-rotate-[25deg] before:bg-gradient-to-b before:from-slate-100 before:opacity-10 
            after:absolute after:-top-[105px] after:ml-[400px] after:block after:h-[600px] after:w-[150px] after:-rotate-[25deg] after:bg-gradient-to-b after:from-slate-100 after:opacity-10"
			></div>
			<div className="inner-column relative flex flex-row justify-between">
				<div className="lg:mb-24">
					<Eyebrow color="text-primary-400">{eyebrow}</Eyebrow>
					<h2 className="attention-voice text-neutral-100">{header}</h2>
					<p className="mt-4 max-w-prose text-neutral-100 lg:max-w-[55ch] xl:max-w-prose">{text}</p>
					<div className="mt-6 flex flex-col space-y-4 xs:block xs:space-x-4 xs:space-y-0">
						<Button href="/rocklin">{buttonText}</Button>
						<Button href="/florida">{buttonTextTwo}</Button>
					</div>
				</div>

				<picture className="absolute right-[15px] bottom-0 hidden aspect-[9/16] lg:block lg:h-[520px] lg:w-[350px] xl:h-[520px] xl:w-[450px]">
					<img
						className="h-full w-full object-cover"
						src="https://peprojects.dev/images/landscape.jpg"
						alt=""
					/>
				</picture>
			</div>
		</section>
	);
}
