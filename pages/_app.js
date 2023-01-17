import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../strore/store';
import Loader from '../components/Loader/Loader';
import Router from 'next/router';
import { useState, useEffect } from 'react';

function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', url => {
      setIsLoading(true);
    });

    Router.events.on('routeChangeComplete', url => {
      setIsLoading(false);
    });

    Router.events.on('routeChangeError', url => {
      setIsLoading(false);
    });
  }, [Router]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {isLoading && <Loader />}
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
