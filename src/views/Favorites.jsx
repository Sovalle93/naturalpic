import { useContext } from 'react';
import Context from '../context/my_context';

const Favorites = () => {
  const { info, setInfo } = useContext(Context);

  const favoritePhotos = info.filter((photo) => photo.liked);

  const toggleLiked = (id) => {
    const updatedInfo = info.map((photo) =>
      photo.id === id ? { ...photo, liked: !photo.liked } : photo
    );
    setInfo(updatedInfo);
  };

  return (
    <section className="favorites">
      <h1>Fotos favoritas</h1>
      <div className="gallery p-3 grid-columns-4">
        {favoritePhotos.length === 0 ? (
          <p>
            <span>No hay fotos favoritas</span>
          </p>
        ) : (
          favoritePhotos.map((photo) => (
            <div
              onClick={() => toggleLiked(photo.id)}
              className="photo"
              style={{ backgroundImage: `url(${photo.keyImage})` }}
              key={photo.id}
            >
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Favorites;
