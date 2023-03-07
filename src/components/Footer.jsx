import Link from 'next/link';
import Email from './Email';
import Logo from './Logo';
import Phone from './Phone';

export default function Footer({ phone, email }) {
	return (
		<footer className="">
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

				<div className="flex flex-row flex-wrap justify-between gap-3 lg:col-span-7 lg:col-start-6 lg:flex-nowrap">
					<div className="">
						<h2 className="mb-3 font-bold">Menu</h2>
						<nav>
							<ul className="space-y-2">
								<li>
									<Link href="/locations" className="-my-1 -mx-2 py-1 px-2 hover:underline">
										Locations
									</Link>
								</li>
								<li>
									<Link href="/gallery" className="-my-1 -mx-2 py-1 px-2 hover:underline">
										Gallery
									</Link>
								</li>
								<li>
									<Link href="/contact-us" className="-my-1 -mx-2 py-1 px-2 hover:underline">
										Free estimate
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="">
						<h2 className="mb-3 font-bold">Locations</h2>
						<nav>
							<ul className="space-y-2">
								<li>
									<Link href="/rocklin" className="-my-1 -mx-2 py-1 px-2 hover:underline">
										Rocklin, CA
									</Link>
								</li>
								<li>
									<Link href="/jacksonville" className="-my-1 -mx-2 py-1 px-2 hover:underline">
										Jacksonville, FL
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="">
						<h2 className="mb-3 font-bold">Services</h2>
						<ul className="space-y-2">
							<li>Mobile dent repair</li>
							<li>Paintless dent repair</li>
							<li>Door ding removal</li>
							<li>Hail dent repair</li>
						</ul>
					</div>
					<div className="">
						<h2 className="mb-3 font-bold">Contact</h2>
						<nav>
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
						</nav>
					</div>
				</div>

				<div className="border-t border-neutral-900 lg:col-span-12">
					<span className="block py-4 text-sm">
						© 2023 Copyright - Design, Development, and Marketing by{' '}
						<Link href="https://www.unwrapdesign.com/" className="inline-block underline">
							Unwrap Design
						</Link>
					</span>
				</div>
			</div>
		</footer>
	);
}
