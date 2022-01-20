import { useState } from 'react';
import './App.css';
import { data } from './data';
import { BsFillChatQuoteFill, BsSun } from 'react-icons/bs'
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'


function App() {
  const [index, setIndex] = useState(0)
  const [isLight, setIslLight] = useState(false)
  const { name, image, job, comment } = data[index]

  const checkIndex = (takeIndex) => {
    if (takeIndex > data.length - 1) {
      return 0
    }
    if (takeIndex < 0) {
      return data.length - 1
    }
    return takeIndex

  }
  const handlePrev = () => {
    setIndex(index => {
      const newIndex = index - 1
      return checkIndex(newIndex)
    })
  }

  const handleNext = () => {
    setIndex(index => {
      const newIndex = index + 1
      return checkIndex(newIndex)
    })
  }

  const handleRandom = () => {
    let num = Math.floor(Math.random() * data.length)
    if (num === index) {
      num = index + 1
    }
    return setIndex(checkIndex(num))
  }

  const setlightMode = () => {
    setIslLight(!isLight)
    return document.body.classList.toggle("dark-mode")
  }




  return (
    <div className="App">
      {!isLight && <BsSun className="sun" onClick={setlightMode} />}
      {isLight && <MdDarkMode className="sun" onClick={setlightMode} />}

      <div className="head">
        <h1>
          Online Reviews
        </h1>
        <div className="underline">
        </div>
      </div>
      <div className="container">
        <div className="image">
          <img src={image} alt="client" />
          <BsFillChatQuoteFill className="quoteicon" />
        </div>
        <div>
          <h2>{name}</h2>
          <h4>{job}</h4>
        </div>
        <p>{comment}</p>
        <div className="buttons">
          <FaLessThan onClick={handlePrev} className="left" />
          <FaGreaterThan onClick={handleNext} className="left" />
        </div>
        <button onClick={handleRandom}> surprise me</button>

      </div>

    </div>
  );
}

export default App;
