import { useState } from "react";
import '../style.css'
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