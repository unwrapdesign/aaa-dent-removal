import Phone from '@/components/Phone';
import Email from '@/components/Email';
import Button from '@/components/Button';

export default function LocationPicker({ location, state, cities, weekday, weekend, phone, email, link, offer }) {
	return (
		<location-card class="border border-slate-200 bg-slate-50 px-8 py-8">
			<h3 className="loud-voice">
				{location}, {state}
			</h3>
			<p className="italic">{cities}</p>
			{/* <ul className="max-w-fit">
				<li className="flex flex-row justify-between">
					Mon - Fri <span>{weekday}</span>
				</li>
				<li className="flex flex-row justify-between">
					Saturday <span>{weekend}</span>
				</li>
				<li className="flex flex-row justify-between">
					Sunday <span>{weekend}</span>
				</li>
			</ul> */}

			<table className="my-5">
				<tbody>
					<tr>
						<td className="pr-6 font-medium">Mon - Fri:</td>
						<td>9AM - 5PM</td>
					</tr>
					<tr>
						<td className="pr-6 font-medium">Saturday:</td>
						<td>Closed</td>
					</tr>
					<tr>
						<td className="pr-6 font-medium">Sunday:</td>
						<td>Closed</td>
					</tr>
				</tbody>
			</table>

			<contact-info>
				<ul className="space-y-2">
					<li className="flex flex-row items-center gap-2">
						<Phone />
						<a href={`tel:${phone}`}>{phone}</a>
					</li>
					<li className="flex flex-row items-center gap-2">
						<Email />
						<a href={`mailto:${email}`}>{email}</a>
					</li>
				</ul>
			</contact-info>
			<location-links class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6 lg:gap-4 xl:gap-6">
				<Button href={location}>View Location</Button>
				<Button href={link}>Get Local Offer</Button>
			</location-links>
		</location-card>
	);
}
