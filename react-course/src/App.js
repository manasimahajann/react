  

import React from "react"; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import AllMeetupsPage from './Pages/AllMeetupsPage';
import FavoritesPage from './Pages/FavoritesPage';
import NewMeetupPage from './Pages/NewMeetupPage';

function App() {
  return (
 
    <Routes>
      <Route path="/all_meetup" element={<AllMeetupsPage />} />
      <Route path="/new_meetup" element={<NewMeetupPage />} />

    </Routes>
       
  );
}

export default App;
