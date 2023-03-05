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

// const inter = Inter({ subsets: ["latin"] });

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
				<ServiceArea></ServiceArea>
				<Services heading="Professional mobile dent repair" eyebrow="What we do"></Services>
				<GraphicDiptych
					eyebrow="What we do"
					heading="Paintless dent repair"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus. Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo consectetur felis augue. Condimentum pellentesque sed aliquet leo in potenti libero.  Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo consectetur felis augue. Condimentum pellentesque sed aliquet leo in potenti libero"
					buttonText="Contact us"
					buttonLink="/contact"
					index={0}
					before="uploadCareuuid"
					after="uploadCareuuid"
				></GraphicDiptych>
				<GraphicDiptych
					eyebrow="Dent repair"
					heading="Mobile paintless dent repair specialists"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus. Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo consectetur felis augue. Condimentum pellentesque sed aliquet leo in potenti libero.  Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo consectetur felis augue. Condimentum pellentesque sed aliquet leo in potenti libero"
					buttonText="Contact us"
					buttonLink="/contact"
					index={1}
					before="uploadCareuuid"
					after="uploadCareuuid"
					flipped={true}
					background="bg-zinc-900"
				></GraphicDiptych>

				<Gallery
					eyebrow="Gallery"
					header="Some work from our previous clients"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus. Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed."
					images={['uploadCareuuid', 'uploadCareuui', 'uploadCareuui', 'uploadCareuui']}
				></Gallery>

				<WhyUs eyebrow="Why choose us" heading="Paintless dent repair you can trust" text="">
					<p className="mt-4 max-w-prose">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus.
						Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo
						consectetur felis augue.
					</p>

					<p className="mt-3 max-w-prose">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus.
						Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo
						consectetur felis augue.
					</p>
				</WhyUs>

				<Testimonials
					eyebrow="Testimonials"
					header="Words from our local customers"
					text="At Stitch Cleaning Service, let us help you solve problems so that you can focus on your mission. We support businesses through periods of expansion, succession."
					location="default"
				></Testimonials>

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
