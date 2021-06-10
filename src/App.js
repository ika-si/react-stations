// DO NOT DELETE

import * as React from 'react'
import { useState } from "react";
import './App.css'
/**
 * 
 * @type {React.FC}
 */
export const App = () => {

  const [url, setDogUrl] = useState('https://images.dog.ceo/breeds/cairn/n02096177_1710.jpg');

  const changeUrl = () => {
    console.log("change")
    setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")
  }

  return (
    <div>
      <header>
        <p>Nikki</p>
      </header>
      <p>道端で出会った犬</p>
      <img src={url} alt="dog"></img>
      <br></br>
      <button onClick={changeUrl}>更新</button>
    </div>
  )
}
