import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  // set theme from localStorage
  useEffect(() => {
    const t = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', t);
  }, []);
  return <Component {...pageProps} />
}
export default MyApp
