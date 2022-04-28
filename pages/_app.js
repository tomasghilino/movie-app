import GlobalStyle from '../globalStyles.jsx';
import 'normalize.css';

//Auth Context
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
