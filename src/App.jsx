import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Favorites from './views/Favorites';
import Context from './context/my_context';
import Home from './views/Home';
import NotFound from './views/NotFound';
import { useState, useEffect } from 'react';
import './App.css';

const PHOTO_URL = '/photos.json';

const App = () => {
  const [info, setInfo] = useState([]);

  const saveInfo = (photos) => {
    setInfo(photos);
  };

  const consultarJSON = async () => {
    try {
      const response = await fetch(PHOTO_URL);
      const data = await response.json();
      if (data.photos) {
        const photos = data.photos.map((item) => ({
          id: item.id,
          keyImage: item.src.portrait,
          title: item.alt,
          liked: false,
        }));
        saveInfo(photos);
      }
    } catch (error) {
      console.error('Hubo un error en el procedimiento:', error);
    }
  };

  useEffect(() => {
    consultarJSON();
  }, []);

  return (
    <>
      <Context.Provider value={{ info, setInfo }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Context.Provider>
    </>
  );
};

export default App;

