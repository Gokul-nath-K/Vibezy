import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './Layout/MainLayout';
import RootLayout from './Layout/RootLayout';
import SigninPage from './Page/SignInPage';
import HomePage from './Page/HomePage'
import SearchPage from './Page/SearchPage.jsx'
import CurrentSongPage from './Page/NowPlaying';
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RootLayout/>} >
      <Route path='/' element={ <SigninPage /> } />
      <Route path='main' element={ <MainLayout /> } >
        <Route path='home' element={<HomePage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='nowplaying' element={<CurrentSongPage />} />
      </Route>
    </Route>
  )
)
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
