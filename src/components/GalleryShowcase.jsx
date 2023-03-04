export default function GalleryShowcase() {
	return (
		<div className="grid grid-cols-12 gap-2 md:gap-3">
			<picture className="col-span-12 sm:col-span-6">
				<img src="https://peprojects.dev/images/landscape.jpg" className="h-full object-cover" alt="" />
			</picture>
			<picture className="col-span-6 sm:col-span-3">
				<img src="https://peprojects.dev/images/landscape.jpg" className="h-full object-cover" alt="" />
			</picture>
			<picture className="col-span-6 sm:col-span-3">
				<img src="https://peprojects.dev/images/portrait.jpg" className="h-full object-cover" alt="" />
			</picture>

			<picture className="col-span-6 sm:col-span-3">
				<img src="https://peprojects.dev/images/portrait.jpg" className="h-full object-cover" alt="" />
			</picture>
			<picture className="col-span-6 sm:col-span-3">
				<img src="https://peprojects.dev/images/landscape.jpg" className="h-full object-cover" alt="" />
			</picture>
			<picture className="col-span-12 sm:col-span-6">
				<img src="https://peprojects.dev/images/landscape.jpg" className="h-full object-cover" alt="" />
			</picture>
		</div>
	);
}
