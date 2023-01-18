import '../styles/global.css';

import { AppProps } from 'next/app';
import React from 'react';

export const App: React.ComponentType<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default App;
