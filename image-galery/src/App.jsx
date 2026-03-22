import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGallery'
import { PixabayApi } from './components/API'
// import './App.css'
import './style.css'

function App() {
  const [text, setText] = useState('');
  const [imgs, setImg] = useState()

  useEffect(() => {
    if (text) {
      PixabayApi(text)
        .then((img) => {
          setImg(img)
        })
    }
  }, [text])

  const addText = (enter) => {
    setText(enter)
  }


  return (
    <div className='App'>
      <SearchBar addText={addText}></SearchBar>
      <ImageGallery imgs={imgs}></ImageGallery>
    </div>)
}

export default App
