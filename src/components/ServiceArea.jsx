import LocationPicker from '@/components/LocationPicker';
export default function ServiceArea() {
	return (
		<>
			<text-content class="mb-14 max-w-3xl">
				<span className="mb-2 block font-semibold tracking-wide text-cyan-800">Locations</span>
				<h2 className="attention-voice mb-4">Pick your service area</h2>
				<p>
					We service both California and Florida. Pick a location to ensure we provide you with accurate
					information, and an accurate quote regarding our services.
				</p>
			</text-content>
			<div className="flex flex-row gap-8">
				<LocationPicker
					location="Rocklin"
					state="CA"
					cities="Roseville, Lincoln, Folsom, Granite Bay"
					weekday="9AM - 5PM"
					weekend="Closed"
					phone="(916) 879-1926"
					email="aaadentremoval@gmail.com"
					link="/rocklin-dent-repair"
				></LocationPicker>
				<LocationPicker
					location="Jacksonville"
					state="FL"
					cities="Lakeside, Yulee, Fleming Island, Oakleaf"
					weekday="9AM - 5PM"
					weekend="Closed"
					phone="(904) 944-2923"
					email="aaadentremoval@gmail.com"
					link="/jacksonville-dent-repair"
				></LocationPicker>
			</div>
		</>
	);
}
