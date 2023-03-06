import Link from 'next/link';
import Logo from '@/components/Logo';
import Button from '@/components/Button';

export default function Nav() {
	return (
		<nav className="relative flex flex-row items-center justify-between text-sm ">
			<div id="logo" className="w-full max-w-[250px]">
				<Logo footer={false} />
			</div>
			<ul className="flex flex-row items-center gap-8">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/gallery">Gallery</Link>
				</li>
				<li>
					<Link href="/locations">Locations</Link>
				</li>
				<li>
					<Button href="/contact" className="py-2 text-sm md:px-6">
						FREE Estimate
					</Button>
				</li>
			</ul>
		</nav>
	);
}
