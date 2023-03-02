import Link from 'next/link';
export default function Button({ href, children }) {
	console.log(href);
	return (
		<>
			<Link href={href} className="inline-block bg-sky-500 py-2 px-6 font-semibold text-slate-50">
				{children}
			</Link>
		</>
	);
}
