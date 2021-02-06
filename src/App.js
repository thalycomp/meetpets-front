import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import GlobalStyled from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Router />
    </BrowserRouter>
  );
}

export default App;
