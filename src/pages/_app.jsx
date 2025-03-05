import Navigation from '../components/Navigation';
import PageHeader from '../components/Header';
import PageFooter from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageHeader />
      <Navigation />
      <Component {...pageProps} />
      <PageFooter />
    </>
  );
}

export default MyApp;
