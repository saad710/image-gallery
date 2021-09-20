import React, { createContext, useState } from 'react';
import { photos } from '../data/photos';



export const ImageContext = createContext()

const ImageDataProvider = (props) => {
    const [items, setItems] = useState(photos);
    const [tempItems, setTempItems] = useState(photos);
    const { children } = props

    return (
        <ImageContext.Provider value={{ items,setItems,tempItems,setTempItems }}>
            { children }
        </ImageContext.Provider>
    );
};

export default ImageDataProvider;