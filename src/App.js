import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './Layout/MainLayout';
import RootLayout from './Layout/RootLayout';
import SigninPage from './Page/SignInPage';
import HomePage from './Page/HomePage'
import SearchPage from './Page/SearchPage.jsx'
import CurrentSongPage from './Page/NowPlaying';
import ProfilePage from './Page/ProfilePage';
import InvitePage from './Page/InvitePage';
import SignupPage from './Page/SignUpPage';
import { useState } from 'react';
import { userContext, songContext, songs } from './Data/userContext';
import { SongData } from './Data/Songs';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RootLayout />} >
      <Route path='/' element={<SigninPage />} />
      <Route path='signup' element={<SignupPage />} />
      <Route path='main' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='nowplaying' element={<CurrentSongPage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='profile/invite' element={<InvitePage />} />
      </Route>
    </Route>
  )
)
function App() {

  const [isplaying, setisplaying] = useState(false);
  const [currentsong, setcurrentsong] = useState(SongData[0]);
  const [song, setsong] = useState(SongData);

  return (
    <>
      <userContext.Provider value={{ isplaying, setisplaying }} >
        <songContext.Provider value={{ currentsong, setcurrentsong }} >
          <songs.Provider value={{ song, setsong }} >
            <RouterProvider router={router} />
          </songs.Provider>
        </songContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
