import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Landing from '@/components/Landing';
import ServiceArea from '@/components/ServiceArea';
import Services from '@/components/Services';
import GraphicDiptych from '@/components/GraphicDiptych';
import Gallery from '@/components/Gallery';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import ContactUs from '@/components/ContactUs';
import ImageSlider from '@unwrapdev/library/dist/ImageSlider/ImageSlider';
import HoodieWhite from "../../public/hoodie-white.jpeg";
import HoodieBlack from "../../public/hoodie-black.jpeg";

export default function Home() {
	return (
		<>
			<header className="relative bg-white/90 py-1 text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur before:absolute before:left-0 before:top-0 before:h-full before:w-[350px] before:bg-slate-900">
				<div className="inner-colum">
					<Nav />
				</div>
			</header>
			<main className="flex-1">
				<Landing></Landing>
				<div className="p-10 mx-10 my-40 bg-orange-50 border border-neutral-500">
					<ImageSlider
						dimensions={{
							height: '400',
							maxWidth: '400',
							width: '400',
						}}
						firstImage={{
							alt: '',
							imageUrl: HoodieBlack
						}}
						secondImage={{
							alt: '',
							imageUrl: HoodieWhite,
						}}
					/>
				</div>

				<div className="p-10 mx-10 my-40 bg-orange-50 border border-neutral-500">
					<ImageSlider
						dimensions={{
							height: '800',
							width: '800',
							maxHeight: '400',
							maxWidth: '800'
						}}
						firstImage={{
							alt: '',
							imageUrl: HoodieBlack
						}}
						secondImage={{
							alt: '',
							imageUrl: HoodieWhite,
						}}
					/>
				</div>


				<ContactUs
					eyebrow="Contact us"
					header="Ready to get Started?"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas adipiscing nulla suspendisse bibendum arcu diam, pellentesque lorem. Amet hac et sed rhoncus magna. Nisl neque ut varius volutpat morbi."
					buttonText="Contact Rocklin, CA"
					buttonTextTwo="Contact Jacksonville, FL"
				></ContactUs>
			</main>

			<footer>
				<div className="inner-column">
					<h1>footer</h1>
				</div>
			</footer>
		</>
	);
}
