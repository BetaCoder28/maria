import { useRoutes, BrowserRouter, useLocation } from 'react-router-dom';
import './App.css'

import { MariaProvider } from '../../Context';
import NavBar from '../../Components/NavBar'
import Home from '../Home';
import Maria from '../Maria';
import Translator from '../Translate';
import NotFound from '../NotFound';
import PageConstruction from '../Construction';


const AppRoutes = () => {
  let routes = useRoutes([
    {path : '/', element : <Home />},
    {path : '/lessons', element : <PageConstruction />},
    {path : '/maria', element : <Maria />},
    {path : '/translate', element : <Translator />},
    {path : '/*', element : <NotFound /> },

  ])

  return routes
}

const AppWrapper = () => {
  const location = useLocation();
  
  return <>
    { location.pathname !== '/' &&  <NavBar />}
    <AppRoutes />
  </>

}

const App = () => {
  return (
    <MariaProvider>
      <BrowserRouter >
        <AppWrapper />
      </BrowserRouter >
    </MariaProvider>
  )
}

export default App
