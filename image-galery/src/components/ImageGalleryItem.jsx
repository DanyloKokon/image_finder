import '../style.css'
function ImageGalleryItem({ hit, onShow, setModal }) {
    const { id, webformatURL } = hit;

    return (<>
        <li onClick={() => {
            onShow(true)
            setModal(webformatURL)
        }} className="ImageGalleryItem" id={id} >
            <img src={webformatURL} alt="" className='ImageGalleryItem-image' />
        </li>
    </>);
}

export default ImageGalleryItem;