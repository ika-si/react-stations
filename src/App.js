// DO NOT DELETE

import * as React from 'react'
import { useState } from "react";
import './App.css'
/**
 * 
 * @type {React.FC}
 */
export const App = () => {

  const [url, setDogUrl] = useState("https://images.dog.ceo/breeds/cairn/n02096177_1710.jpg");

  return (
    <div>
      <header>
        <p>Nikki</p>
      </header>
      <p>道端で出会った犬</p>
      <img src={url} alt="dog"></img>
    </div>
  )
}
