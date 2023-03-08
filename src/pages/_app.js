import '@/styles/globals.css';
import Header from '@/components/HeaderTest';
// global layout?
// Component prop is the active page
// pageProps has initial props that were preloaded for the page

export default function App({ Component, pageProps }) {
	return (
		<>
			<Header></Header>
			<Component {...pageProps} />
		</>
	);
}
