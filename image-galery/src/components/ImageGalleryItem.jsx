// ImageGalleryItem.jsx
import { useContext } from "react";
import { SetModal } from "../Apps/App";

function ImageGalleryItem({ hit, onShow }) {
    const { id, webformatURL, largeImageURL } = hit;


    const setModalLink = useContext(SetModal);

    const handleClick = () => {
        onShow(true);
        setModalLink(largeImageURL);
    };

    return (
        <li onClick={handleClick} className="ImageGalleryItem" id={id}>
            <img src={webformatURL} alt="" className='ImageGalleryItem-image' />
        </li>
    );
}

export default ImageGalleryItem;