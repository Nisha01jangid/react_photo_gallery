import logo from './logo.svg';
import './App.css';
import DisplayPhoto from './components/DisplayPhoto';
import Contact_details from './components/Contact_details';
import image1 from './components/1.png';
import image2 from './components/2.png';
import { useState } from 'react';

function App() {

  // let image = image1;
  const [image, setImage] = useState(image1)
  const [content, setContent] = useState("first")

  const ChangeImageLeft = () =>{
      setImage(image1);
      setContent("first");
  }

  const ChangeImageRight = () =>{
    setImage(image2);
    setContent("Second");
  }

  return (
    <div className="App">

      <div className='main_div'>
        <DisplayPhoto source={image} content={content}/>
        {/* All the functionalities of Contact is  also implemented in the Contact Details Component ....  Please Check */}
        {/* <Contact_details/> */}

        <div className='Scroller_div'>
        <button onClick={ChangeImageLeft}>Left</button>
        <button onClick={ChangeImageRight}>Right</button>
        </div>
      </div>

    </div>
  );
}

export default App;
