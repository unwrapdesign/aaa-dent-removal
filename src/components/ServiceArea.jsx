import LocationCard from '@/components/LocationCard';
import Eyebrow from '@/components/Eyebrow';
export default function ServiceArea() {
	return (
		<section className="bg-slate-100">
			<div className="inner-column">
				<text-content class="mb-14 max-w-3xl">
					<Eyebrow>Locations</Eyebrow>
					<h2 className="attention-voice">Pick your service area</h2>
					<p className="mt-4 max-w-prose">
						We service both California and Florida. Pick a location to ensure we provide you with accurate
						information, and an accurate quote regarding our services.
					</p>
				</text-content>
				<div className="flex max-w-fit flex-col gap-4 md:flex-row md:gap-8">
					<LocationCard
						location="Rocklin"
						state="CA"
						cities="Roseville, Lincoln, Folsom, Granite Bay"
						weekday="9AM - 5PM"
						weekend="Closed"
						phone="(916) 879-1926"
						email="aaadentremoval@gmail.com"
						link="/rocklin-dent-repair"
					></LocationCard>
					<LocationCard
						location="Jacksonville"
						state="FL"
						cities="Lakeside, Yulee, Fleming Island, Oakleaf"
						weekday="9AM - 5PM"
						weekend="Closed"
						phone="(904) 944-2923"
						email="aaadentremoval@gmail.com"
						link="/jacksonville-dent-repair"
					></LocationCard>
				</div>
			</div>
		</section>
	);
}
