import Eyebrow from '@/components/Eyebrow';
import Button from './Button';

export default function GraphicDiptych({ eyebrow, heading, text, buttonText, buttonLink, index }) {
	let beforeAfter = ['https://ucarecdn.com/46f7079e-ad3b-4096-91f3-37c7986d9c91/'];

	return (
		<section>
			<div className="inner-column">
				<graphic-diptych class="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
					<div className="">
						<picture className="relative block max-w-[500px] before:absolute before:-top-[15px] before:-right-[15px] before:-z-10 before:h-[300px] before:w-[200px] before:bg-cyan-800 after:absolute after:-bottom-[15px] after:-left-[15px] after:-z-10 after:h-[300px] after:w-[200px] after:bg-cyan-800">
							<img className="block h-auto w-full" src={beforeAfter[index]} alt="" />
						</picture>
					</div>
					<div>
						<Eyebrow>{eyebrow}</Eyebrow>
						<h2 className="attention-voice">{heading}</h2>
						<p className="mt-4 mb-6 max-w-prose">{text}</p>
						<Button href={buttonLink}>{buttonText}</Button>
					</div>
				</graphic-diptych>
			</div>
		</section>
	);
}
