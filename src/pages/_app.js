import '@/styles/globals.css';
// global layout?
// Component prop is the active page
// pageProps has initial props that were preloaded for the page

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
