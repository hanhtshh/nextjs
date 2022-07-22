import '../styles/globals.css';
import '../styles/typography.css';
import ProviderWrapper from '../src/utils/store';
function MyApp({ Component, pageProps }) {
  return (
    <ProviderWrapper>
      <Component {...pageProps} />
    </ProviderWrapper>
  );
}

export default MyApp;
