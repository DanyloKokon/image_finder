import { useState } from "react";
import '../style.css'
import ImageGalleryItem from "./ImageGalleryItem";
function ImageGallery({imgs}) {

    return (<>
        <ul className="ImageGallery">
            {imgs && imgs.hits.map(hit => (
                <ImageGalleryItem key={hit.id} hit={hit} />
            ))}
        </ul>
    </>);
}

export default ImageGallery;