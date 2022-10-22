import ReactDOM from 'react-dom/client';
import App from './App';
import 'assets/scss/style.module.scss';
import { CustomizationProvider } from 'context/CustomizationContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <CustomizationProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CustomizationProvider>
);
