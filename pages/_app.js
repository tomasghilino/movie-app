import GlobalStyle from '../globalStyles.jsx';
import 'normalize.css';

//Context
import { ContextAuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextAuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ContextAuthProvider>
    </>
  );
}

export default MyApp;
