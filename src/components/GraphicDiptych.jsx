import Eyebrow from '@/components/Eyebrow';
import Button from './Button';

export default function GraphicDiptych({ eyebrow, heading, text, buttonText, buttonLink, index, flipped }) {
	let beforeAfter = [
		'https://ucarecdn.com/46f7079e-ad3b-4096-91f3-37c7986d9c91/',
		'https://ucarecdn.com/2e95c95b-655d-4fc6-af0a-2bfbf55de5b9/',
	];

	return (
		<section className="bg-slate-100">
			<div className="inner-column">
				<graphic-diptych class={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 `}>
					<div className="">
						<picture
							className={`relative z-10 block max-w-[500px] before:absolute before:-top-[15px] before:-right-[15px] before:-z-10 before:h-[300px] before:w-[200px] before:bg-cyan-800 after:absolute after:-bottom-[15px] after:-left-[15px] after:-z-10 after:h-[300px] after:w-[200px] after:bg-cyan-800 ${
								flipped === true ? 'col-start-2' : ''
							}`}
						>
							<img className="block h-auto w-full" src={beforeAfter[index]} alt="" />
						</picture>
					</div>
					<div className={`${flipped === true ? 'row-start-1' : ''}`}>
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
