import React from 'react';
import { SnackbarProvider } from 'notistack';
// import { useStoreState, useStoreActions } from 'easy-peasy';
import Home from './pages/home.page';

const App = () => (
  <SnackbarProvider maxSnack={3}>
    <Home />
  </SnackbarProvider>

);


export default App;
