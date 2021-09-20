import React, { useContext } from 'react';
import ImageDataProvider, { ImageContext } from '../provider/ImageDataProvider';
import "./GalleryHeader.css"

const GalleryHeader = () => {
    const {items,setItems,tempItems,setTempItems} = useContext(ImageContext);
    const handleKeyword = (e) => {
        console.log(e.target.value)
        const val = items !== null && items.filter(userPhotos => JSON.stringify(userPhotos.file_name).toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(val);
        setTempItems(val)
        
    }

    return (
      
            <div>
           <nav className="navbar navbar-light bg-light">
                <h6 className="navbar-brand">Photo Gallery</h6>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) =>  handleKeyword(e)} />
                    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>
            </nav>
        </div>
       
    );
};

export default GalleryHeader;