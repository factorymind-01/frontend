import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import Routes from 'routes';
import themes from 'themes';
import { useContext } from 'react';
import { CustomizationContext } from 'context/CustomizationContext';

// config file
import config from 'config';

function App() {
  const myContext = useContext(CustomizationContext);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider
        theme={themes({
          isOpen: myContext?.isOpen, // for active default menu
          fontFamily: config.fontFamily,
          borderRadius: config.borderRadius,
          opened: myContext?.opened,
          navType: myContext?.themeStyle
        })}
      >
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
