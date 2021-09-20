import React, { useCallback, useContext, useState } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import ImageDataProvider, { ImageContext } from '../provider/ImageDataProvider';
import './GalleryItem.css'

const GalleryItem = () => {

    const {tempItems,setTempItems,items,setItems} = useContext(ImageContext)
    console.log(tempItems)
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
    return (
        <div>
              <Gallery
        // className="custom-gallery"
        photos={tempItems}
        onClick={openLightbox}
        
      />
      
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={tempItems.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
        </div>
    );
};

export default GalleryItem;