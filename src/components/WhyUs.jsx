import Eyebrow from './Eyebrow';

import WhyUsCard from './WhyUsCard';

export default function WhyUs({ eyebrow, heading, text }) {
	return (
		<section className="bg-slate-100">
			<div className="inner-column grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-3">
				<div className="lg:col-span-5">
					<Eyebrow>{eyebrow}</Eyebrow>
					<h2 className="attention-voice max-w-[14ch]">{heading}</h2>
					<p className="mt-6 max-w-prose">{text}</p>
				</div>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-6 lg:col-span-6 lg:col-start-7">
					<WhyUsCard
						image={0}
						header="Trusted company"
						text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
						className="col-span-3 border bg-slate-50 py-7 px-6"
					></WhyUsCard>
					<WhyUsCard
						image={1}
						header="30+ years experience"
						text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
						className="col-span-3 border bg-slate-50 py-7 px-6"
					></WhyUsCard>
					<WhyUsCard
						image={2}
						header="Licensed & insured"
						text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
						className="col-span-3 border bg-slate-50 py-7 px-6"
					></WhyUsCard>
					<WhyUsCard
						image={2}
						header="Highly reviewed"
						text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
						className="col-span-3 border bg-slate-50 py-7 px-6"
					></WhyUsCard>
				</div>
			</div>
		</section>
	);
}
