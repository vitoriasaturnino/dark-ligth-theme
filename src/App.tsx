import React from 'react';
import { ThemeProvider } from 'styled-components';
import ligth from './styles/themes/ligth'
import GlobalStyle from './styles/global';
import { Header } from './components/Header'


function App() {

  return (
    <ThemeProvider theme={ligth}>
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
