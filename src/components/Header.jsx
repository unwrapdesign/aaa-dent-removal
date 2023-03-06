import Nav from './Nav';

export default function Header() {
	return (
		<header className="relative bg-white/90 py-1 text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur before:absolute before:left-0 before:top-0 before:h-full before:w-[350px] before:bg-slate-900">
			<div className="inner-column">
				<Nav />
			</div>
		</header>
	);
}
