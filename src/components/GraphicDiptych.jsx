import Eyebrow from '@/components/Eyebrow';
import Image from 'next/image';
import { Button } from './Button';
import Before from '../../public/before.png';
import BeforeTwo from '../../public/before2.png';

export default function GraphicDiptych({ eyebrow, heading, text, buttonText, buttonLink, index, flipped, background }) {
	let beforeAfter = [Before, BeforeTwo];

	return (
		<section className={`${background ? background + ' text-white' : 'bg-slate-100'}`}>
			<div className="inner-column">
				<graphic-diptych class={`grid grid-cols-1 items-center gap-16 md:grid-cols-2 `}>
					<div className="">
						<picture
							className={`relative z-10 block max-w-[500px] before:absolute before:-top-[15px] before:-right-[15px] before:-z-10 before:h-[300px] before:w-[200px] before:bg-primary-800 after:absolute after:-bottom-[15px] after:-left-[15px] after:-z-10 after:h-[300px] after:w-[200px] after:bg-primary-800 ${
								flipped === true ? 'col-start-2' : ''
							}`}
						>
							<Image
								src={beforeAfter[index]}
								placeholder="blur"
								className="block h-auto w-full"
								width={500}
								height={500}
								alt=""
							/>
						</picture>
					</div>
					<div className={`${flipped === true ? 'row-start-1' : ''}`}>
						<Eyebrow color={`${background ? 'text-primary-400' : ''}`}>{eyebrow}</Eyebrow>
						<h2 className="attention-voice">{heading}</h2>
						<p className="mt-4 max-w-prose">{text}</p>
						<Button href={buttonLink} className="mt-6">
							{buttonText}
						</Button>
					</div>
				</graphic-diptych>
			</div>
		</section>
	);
}
