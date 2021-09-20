import React from 'react';

import './App.css';

import Dropzone from "./dropzone/Dropzone";
import GalleryHeader from './header/GalleryHeader';
import GalleryItem from './photoItem/GalleryItem';
function App() {
  return (
    <div>
     <GalleryHeader/>
      <div className="content">
        <Dropzone/>
      </div>
      <GalleryItem/>
    </div>
  );
}

export default App;
