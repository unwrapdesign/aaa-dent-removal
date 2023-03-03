import Link from 'next/link';
export default function Button({ href, children }) {
	console.log(href);
	return (
		<>
			<Link
				href={href}
				className="inline-block cursor-pointer bg-sky-500 py-3 px-5 text-center text-base font-medium text-white md:px-6"
			>
				{children}
			</Link>
		</>
	);
}
