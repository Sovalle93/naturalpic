import { useContext } from 'react';
import Context from '../context/my_context';
import IconHeart from './IconHeart';

const Gallery = () => {
  const { info, setInfo } = useContext(Context);

  const setLiked = (id) => {
    const infoCopy = [...info];
    const infoIndex = infoCopy.findIndex((item) => item.id === id);
    infoCopy[infoIndex].liked = !infoCopy[infoIndex].liked;
    setInfo(infoCopy);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {info.map((photo) => (
        <div
          onClick={() => setLiked(photo.id)}
          className="photo"
          style={{ backgroundImage: `url(${photo.keyImage})` }}
          key={photo.id}
        >
          <IconHeart filled={photo.liked} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

