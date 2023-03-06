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
import { Accordion, ButtonTest } from '@unwrapdev/library';

export default function Home() {
	return (
		<>
			<header className="relative bg-white/90 py-1 text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur before:absolute before:left-0 before:top-0 before:h-full before:w-[350px] before:bg-slate-900">
				<div className="inner-column">
					<Nav />
				</div>
			</header>
			<main className="flex-1">
				<Landing></Landing>
				<div className="p-10 mx-10 my-40 bg-orange-50 border border-neutral-500">
					<ButtonTest text="asd" />
					<Accordion
						rootClass="p-4 shadow-md bg-white"
						itemClass="border !border-slate-200 !p-3"
						targetClass="!bg-slate-200"
						items={[
							{
								value: 'item-1',
								trigger: "Item 1 Trigger",
								content: "Item 1 Content"
							},
							{
								value: 'item-2',
								trigger: "Item 2 Trigger",
								content: "Item 2 Content"
							},
							{
								value: 'item-3',
								trigger: "Item 3 Trigger",
								content: "Item 3 Content"
							},
							
						]}
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
