import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';

import { Button } from '@/components/Button';
import Logo from '@/components/Logo';
import NavLinks from './NavLinks';
// import { NavLinks } from '@/components/NavLinks';

function MenuIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<path d="M5 6h14M5 18h14M5 12h14" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

function ChevronUpIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<path d="M17 14l-5-5-5 5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

function MobileNavLink({ children, ...props }) {
	return (
		<Popover.Button as={Link} className="block text-base leading-7 tracking-tight text-gray-700" {...props}>
			{children}
		</Popover.Button>
	);
}

export default function Header() {
	return (
		<header className="sticky top-0 z-50 bg-white shadow-md shadow-slate-900/5">
			<nav>
				<div className="inner-column relative z-50 flex items-center justify-between py-1">
					<span className="absolute left-[-360px] z-10 block h-full w-[600px] border-r-4 border-sky-800 bg-gray-900 xs:left-[-300px] xs:border-r-8"></span>
					<div className="relative z-20 flex items-center gap-16 py-1">
						<Link href="/" aria-label="Home">
							<Logo className="h-10 w-auto" footer={false} />
						</Link>
					</div>
					<div className="flex items-center justify-center gap-6">
						<Popover className="md:hidden">
							{({ open }) => (
								<>
									<Popover.Button
										className="relative z-10 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
										aria-label="Toggle site navigation"
									>
										{({ open }) =>
											open ? (
												<ChevronUpIcon className="h-6 w-6" />
											) : (
												<MenuIcon className="h-6 w-6" />
											)
										}
									</Popover.Button>
									<LazyMotion features={domAnimation}>
										<AnimatePresence initial={false}>
											{open && (
												<>
													<Popover.Overlay
														static
														as={m.div}
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														exit={{ opacity: 0 }}
														className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
													/>
													<Popover.Panel
														static
														as={m.div}
														initial={{ opacity: 0, y: -32 }}
														animate={{ opacity: 1, y: 0 }}
														exit={{
															opacity: 0,
															y: -32,
															transition: { duration: 0.2 },
														}}
														className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-lg bg-gray-50 px-6 pb-6 pt-24 shadow-2xl shadow-gray-900/20"
													>
														<div className="space-y-4">
															<Link href="/">Home</Link>
															<Link href="/gallery">Gallery</Link>
															<Link href="/locations">Locations</Link>
														</div>
														<div className="mt-8 flex flex-col gap-4">
															<Button href="/login">FREE estimate</Button>
														</div>
													</Popover.Panel>
												</>
											)}
										</AnimatePresence>
									</LazyMotion>
								</>
							)}
						</Popover>
						<div className="hidden md:flex md:gap-10">
							<ul className="flex flex-row items-center gap-8 text-sm">
								<NavLinks></NavLinks>
								<li>
									<Button href="/contact" className="">
										FREE Estimate
									</Button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
