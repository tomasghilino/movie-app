import GlobalStyle from '../globalStyles.jsx';
import 'normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
