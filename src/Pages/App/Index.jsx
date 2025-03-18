import { useRoutes, BrowserRouter, useLocation } from 'react-router-dom';
import './App.css'

import ProtectedRoute from '../../Components/ProtectedRoute';
import PublicRoute from '../../Components/PublicRoute';
import { MariaProvider } from '../../Context';
import NavBar from '../../Components/NavBar'
import Home from '../Home';
import Maria from '../Maria';
import Translator from '../Translate';
import NotFound from '../NotFound';
import PageConstruction from '../Construction';
import Login from '../Login';
import { LanguageProvider } from '../../locale/languageProvider';

const AppRoutes = () => {
  let routes = useRoutes([
    {path : '/', element : <Home />},
    {path : '/lessons', element : <PageConstruction />},
    {path : '/maria', element : <ProtectedRoute><Maria /></ProtectedRoute> },
    {path : '/translate', element : <Translator />},
    {path : '/login', element : <PublicRoute><Login /></PublicRoute>},
    {path : '/*', element : <NotFound /> },

  ])

  return routes
}

const AppWrapper = () => {
  const location = useLocation();
  
  return <>
    { location.pathname !== '/' && location.pathname !== '/login' && <NavBar />}
    <AppRoutes />
  </>

}

const App = () => {
  return (
    <LanguageProvider>
      <MariaProvider>
        <BrowserRouter >
          <AppWrapper />
        </BrowserRouter >
      </MariaProvider>
    </LanguageProvider>
  )
}

export default App;
