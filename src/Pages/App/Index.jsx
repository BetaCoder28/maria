import { useRoutes, BrowserRouter } from 'react-router-dom';
import './App.css'

import NavBar from '../../Components/NavBar'
import Maria from '../Maria';
import NotFound from '../NotFound';


const AppRoutes = () => {
  let routes = useRoutes([
    {path : '/', element : <NotFound />},
    {path : '/lessons', element : <NotFound />},
    {path : '/maria', element : <Maria />},
    {path : '/translate', element : <NotFound />},
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
