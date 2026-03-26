import { use, useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import ImageGallery from '../components/ImageGallery'
import { PixabayApi } from '../components/API'
import Loader from '../components/Loader'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Mode from '../components/Mode'

// import '../styles/style2.css'

function App2() {
  const [text, setText] = useState('');
  const [imgs, setImg] = useState()
  const [loading, setLoading] = useState(false)
  const [num, setNum] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [modal, setModal] = useState('')


  useEffect(() => {
    if (text) {
      PixabayApi(text, num)
        .then((img) => {
          setImg(img)
        }).finally(()=>{
          setLoading(false)
        })
    }
  }, [text, num])

  const addNum = () => {
    setNum(num+1)
  }

  const addText = (enter) => {
    setText(enter)
  }

  const onShowModal = (tru) => {
    setShowModal(tru)
  }

  const onModal = (link) =>{
    setModal(link)
  }

  


  return (
    <div className='App'>
      <SearchBar addText={addText}></SearchBar>
      <ImageGallery setModal={onModal} onShow={onShowModal} imgs={imgs}></ImageGallery>
      {showModal && <Modal showModal={onShowModal} modal={modal}/>}
      {text && <Button num={addNum}></Button>}
      {loading && <Loader loading={loading}/>}
      
    </div>)
}

export default App2
