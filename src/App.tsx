import { ThemeProvider, DefaultTheme } from 'styled-components';
import ligth from './styles/themes/ligth';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', ligth);

  const toggleTheme = () => {
    setTheme(theme.title === 'ligth' ? dark : ligth);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
