import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import '../App.css';

const photos = [
  {
    src: 'https://i.pinimg.com/originals/c0/50/d0/c050d0a7afbfa63071d1992d89331a7d.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'https://zakharkozolii.com/wp-content/uploads/2018/07/0002.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'https://cdn.jhmrad.com/wp-content/uploads/ver-fotos-casas-bonitas-escoja-vote-por-sus_557735.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'https://i.pinimg.com/originals/de/c0/0e/dec00eeba599c0739d14ffbbb2a38228.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'https://i.pinimg.com/736x/18/67/84/1867844a537a4f69ec2006e48d43bec5.jpg',
    width: 2,
    height: 4
  },
  {
    src: 'https://i.pinimg.com/originals/52/08/9a/52089aad9b73a793f5b6b6393e07c3a3.jpg',
    width: 4,
    height: 2
  }
];

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  return (
    <div className="photo-gallery">
      <Gallery photos={photos} onClick={openLightbox} />
      {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % photos.length)
          }
        />
      )}
    </div>
  );
};

export default PhotoGallery;
