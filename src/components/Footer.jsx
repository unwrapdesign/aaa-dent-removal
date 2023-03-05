import Link from 'next/link';
import Email from './Email';
import Logo from './Logo';
import Phone from './Phone';

export default function Footer({ phone, email }) {
	return (
		<footer>
			<div className="inner-column grid grid-cols-1 gap-8 lg:grid-cols-12">
				<div className="lg:col-span-4">
					<div className="w-full max-w-[420px]">
						<Logo footer={true} />
					</div>
					<p className="mt-4 max-w-[45ch] text-sm">
						Aenean tincidunt id mauris idology auctor. Donec at ligula lacus. Nulla dig nissimmi quis neque
						interdum. An Ohio man allegedly punched.
					</p>
				</div>

				<section className="flex flex-row flex-wrap justify-between gap-3 lg:col-span-7 lg:col-start-6 lg:flex-nowrap">
					<div className="">
						<h2 className="font-bold">Menu</h2>
						<nav>
							<ul>
								<li>
									<Link href="/locations">Locations</Link>
								</li>
								<li>
									<Link href="/gallery">Gallery</Link>
								</li>
								<li>
									<Link href="/contact-us">Free estimate</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="">
						<h2 className="font-bold">Locations</h2>
						<nav>
							<ul>
								<li>
									<Link href="/rocklin">Rocklin, CA</Link>
								</li>
								<li>
									<Link href="/jacksonville">Jacksonville, FL</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="">
						<h2 className="font-bold">Services</h2>
						<ul>
							<li>Mobile dent repair</li>
							<li>Paintless dent repair</li>
							<li>Door ding removal</li>
							<li>Hail dent repair</li>
						</ul>
					</div>
					<div className="">
						<h2 className="font-bold">Contact</h2>
						<nav>
							<ul>
								<li className="flex flex-row items-center gap-2">
									<Phone />
									<a href={`tel:${phone}`}>{phone}</a>
								</li>
								<li className="flex flex-row items-center gap-2">
									<Email />
									<a href={`mailto:${email}`}>{email}</a>
								</li>
							</ul>
						</nav>
					</div>
				</section>
			</div>
		</footer>
	);
}
