import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export default function NavLinks() {
	let [hoveredIndex, setHoveredIndex] = useState(null);

	return [
		['Home', '/'],
		['Gallery', '/gallery'],
		['Location', '/location'],
	].map(([label, href], index) => (
		<li key={label}>
			<Link
				href={href}
				className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
				onMouseEnter={() => setHoveredIndex(index)}
				onMouseLeave={() => setHoveredIndex(null)}
			>
				<AnimatePresence>
					{hoveredIndex === index && (
						<motion.span
							className="absolute inset-0 bg-gray-100"
							layoutId="hoverBackground"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { duration: 0.15 } }}
							exit={{
								opacity: 0,
								transition: { duration: 0.15, delay: 0.2 },
							}}
						/>
					)}
				</AnimatePresence>
				<span className="relative z-10">{label}</span>
			</Link>
		</li>
	));
}
