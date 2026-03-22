import '../style.css'
function ImageGalleryItem({hit}) {
    const { id, webformatURL } = hit;
    return (<>
        <li className="ImageGalleryItem" id= {id} >
            <img src={webformatURL} alt="" className='ImageGalleryItem-image' />
        </li>
    </>);
}

export default ImageGalleryItem;