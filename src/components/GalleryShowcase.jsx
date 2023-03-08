import Image from 'next/image';
import Portrait from '../../public/portrait.jpg';
import Landscape from '../../public/landscape.jpg';

export default function GalleryShowcase(images) {
	//images is an array of uuids from uploadcare

	return (
		<div className="grid grid-cols-12 gap-2 sm:gap-3">
			<picture className="relative col-span-12 sm:col-span-6">
				<Image src={Landscape} className="h-full  object-cover" alt=""></Image>
			</picture>
			<picture className="relative col-span-6 sm:col-span-3">
				<Image src={Landscape} className="h-full  object-cover" alt=""></Image>
			</picture>
			<picture className="relative col-span-6 sm:col-span-3">
				<Image src={Portrait} className="h-full  object-cover" alt=""></Image>
			</picture>

			<picture className="relative col-span-6 sm:col-span-3">
				<Image src={Portrait} className="h-full  object-cover" alt=""></Image>
			</picture>
			<picture className="relative col-span-6 sm:col-span-3">
				<Image src={Landscape} className="h-full  object-cover" alt=""></Image>
			</picture>
			<picture className="relative col-span-12 sm:col-span-6">
				<Image src={Landscape} className="h-full  object-cover" alt=""></Image>
			</picture>
		</div>
	);
}
