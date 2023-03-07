import Quotes from './Quotes';

export default function Review({ review, name, location }) {
	return (
		<review-card class="flex flex-col justify-between gap-8 border border-slate-200 bg-neutral-50 py-7 px-6">
			<div className="">
				<Quotes className="max-w-[30px]" />
				<p className="mt-7 max-w-prose">{review}</p>
			</div>
			<div>
				<span className="shout-voice block">{name}</span>
				<span className="block text-sm text-neutral-500">{location}</span>
			</div>
		</review-card>
	);
}
