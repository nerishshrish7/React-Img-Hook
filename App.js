import './App.css';
import { useState } from 'react';
import img1 from './img/chit.jpg';
import img2 from './img/lum.jpg';
import img3 from './img/mukti.jpg';
import img4 from './img/sagar.jpg';
import img5 from './img/pasu.jpg';
import img6 from './img/pokh.jpg';

function App() {
  const imagesArray= [img1,img2,img3,img4,img5,img6];
  const [activeImage, setActiveImage] = useState(0);
  const goToNextImage = () => {
    if (activeImage === imagesArray.length - 1) {
      setActiveImage(0);
     return;
    }
   setActiveImage(activeImage + 1);
   console.log(activeImage);
 };

 const goToPreviousImage = () => {
    if (activeImage === 0) {
     setActiveImage(imagesArray.length - 1);
    return;
    }
   setActiveImage(activeImage - 1);
   console.log(activeImage);
 };
  return (
    <>
    <button onClick={goToPreviousImage}>-</button>
    <img src={imagesArray[activeImage]} alt='img' id='image'/>
    <button onClick={goToNextImage}>+</button>
    </>
  );
}

export default App;
