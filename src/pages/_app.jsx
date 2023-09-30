// pages/_app.js or pages/_app.jsx
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
