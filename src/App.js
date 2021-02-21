import { BrowserRouter } from 'react-router-dom';
import history from './services/history';
import Router from './Router';
import GlobalStyled from './styles/global';


function App() {
  return (
    <BrowserRouter history={history}>
      <GlobalStyled />
      <Router />
    </BrowserRouter>
  );
}

export default App;
