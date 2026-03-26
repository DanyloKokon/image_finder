//import '..styles/style.css'
function Modal({ modal , showModal}) {

    

    return (<>
        <div onClick={() => showModal(false)} className="Overlay">
            <div className="Modal">
                <img src={modal} alt="" />
            </div>
        </div>
    </>);
}

export default Modal;