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

  async function changeUrl() {
    const response = await fetch(
      'https://dog.ceo/api/breeds/image/random'
    );
    const data = await response.json();
    console.log(data);
    setDogUrl(data.message);
  }

  return (
    <div>
      <header>
        <p>DogList</p>
      </header>
      <p>道端で出会った犬</p>
      <img src={url} alt="dog"></img>
      <br></br>
      <button onClick={changeUrl}>更新</button>
    </div>
  )
}
