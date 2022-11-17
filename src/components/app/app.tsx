import { ThemeProvider } from '@mui/material';
import { Main } from '../../pages';
import { theme } from '../../theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  )
}

export default App;
