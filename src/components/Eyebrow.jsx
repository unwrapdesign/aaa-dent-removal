export default function Eyebrow({ children, color }) {
	return (
		<span className={`${color ? color : 'text-primary-800'} mb-2 block font-semibold tracking-wide `}>
			{children}
		</span>
	);
}
