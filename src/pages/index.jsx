import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Landing from '@/components/Landing';
import ServiceArea from '@/components/ServiceArea';

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
				<section className="relative z-10">
					<div className="inner-column">
						<Landing></Landing>
					</div>
				</section>

				<section className="bg-slate-100">
					<div className="inner-column">
						<ServiceArea></ServiceArea>
					</div>
				</section>
			</main>

			<footer>
				<div className="inner-column">
					<h1>footer</h1>
				</div>
			</footer>
		</>
	);
}
