import NavLinks from './NavLinks';
// import { NavLinks } from '@/components/NavLinks';

export default function Header() {
	return (
		<header className="sticky top-0 z-50 bg-white py-5 shadow-md shadow-slate-900/5">
			<nav>
				<div className="inner-column relative z-50 flex items-center justify-between py-1">
					<div className="relative z-20 flex items-center gap-16 py-1">
						<p className="">this is not a link</p>
					</div>

					<div className="flex gap-10">
						<ul className="flex flex-row items-center gap-8 text-sm">
							<NavLinks></NavLinks>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
