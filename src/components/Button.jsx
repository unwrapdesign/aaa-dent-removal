import Link from 'next/link';
export default function Button({ page, children }) {
	return (
		<>
			<Link href={page}>{children}</Link>
		</>
	);
}
