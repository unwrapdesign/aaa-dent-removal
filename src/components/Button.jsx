import { forwardRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const baseStyles = {
	solid: 'inline-flex justify-center py-2 px-6 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
	outline:
		'inline-flex justify-center border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 font-semibold outline-offset-2 transition-colors',
};

const variantStyles = {
	solid: {
		primary:
			'relative overflow-hidden bg-primary-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-primary-600 active:text-white/80 before:transition-colors',
		white: 'bg-white text-primary-900 hover:bg-white/90 active:bg-white/90 active:text-primary-900/70',
		gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
	},
	outline: {
		gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
		primary:
			'border-gray-300 text-primary-700 hover:border-primary-400 active:bg-primary-100 active:text-primary-700/80',
	},
};

export const Button = forwardRef(function Button(
	{ variant = 'solid', color = 'primary', className, href, ...props },
	ref,
) {
	className = clsx(baseStyles[variant], variantStyles[variant][color], className);

	return href ? (
		<Link ref={ref} href={href} className={className} {...props} />
	) : (
		<button ref={ref} className={className} {...props} />
	);
});
