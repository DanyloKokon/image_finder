import { useState } from "react";
//import '..styles/style.css'
import ImageGalleryItem from "./ImageGalleryItem";
function ImageGallery({imgs, onShow, setModal}) {

    return (<>
        <ul className="ImageGallery">
            {imgs && imgs.hits.map(hit => (
                <ImageGalleryItem onShow={onShow} setModal={setModal} key={hit.id} hit={hit} />

            ))}
        </ul>
    </>);
}

export default ImageGallery;