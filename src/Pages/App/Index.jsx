import { useRoutes, BrowserRouter } from 'react-router-dom';
import './App.css'

import NavBar from '../../Components/NavBar'
import Home from '../Home';
import Maria from '../Maria';
import NotFound from '../NotFound';
import PageConstruction from '../Construction';


const AppRoutes = () => {
  let routes = useRoutes([
    {path : '/', element : <Home />},
    {path : '/lessons', element : <PageConstruction />},
    {path : '/maria', element : <Maria />},
    {path : '/translate', element : <PageConstruction />},
    {path : '/*', element : <NotFound /> },

  ])

  return routes
}

const App = () => {
  return (
      <BrowserRouter >
        <NavBar />
        <AppRoutes />
      </BrowserRouter >
  )
}

export default App
