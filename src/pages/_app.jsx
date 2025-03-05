import Navigation from '../components/Navigation';
import PageHeader from '../components/Header';
import PageFooter from '../components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  top: 0;
  position: sticky;
` ;

function MyApp({ Component, pageProps }) {
  return (
    <>
    <AppContainer>
      <PageHeader />
      <Navigation />
    </AppContainer>
      <Component {...pageProps} />
      <PageFooter />
    </>
  );
}

export default MyApp;
