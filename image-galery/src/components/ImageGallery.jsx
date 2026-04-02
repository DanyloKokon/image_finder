 // ImageGallery.jsx
 import { useState } from "react";
//import '..styles/style.css'
import ImageGalleryItem from "./ImageGalleryItem";
function ImageGallery({imgs, onShow}) {

    return (<>
        <ul className="ImageGallery">
            {imgs && imgs.hits.map(hit => (
                <ImageGalleryItem onShow={onShow}  key={hit.id} hit={hit} />

            ))}
        </ul>
    </>);
}

export default ImageGallery;