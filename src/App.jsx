import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  const prop_obj = [
    {
      card_img:"https://cdn.pixabay.com/photo/2024/04/13/10/20/peacock-8693634_640.jpg",
      card_number:"1"
    },
    {
      card_img:"https://cdn.pixabay.com/photo/2024/05/21/11/46/house-8777647_640.jpg",
      card_number:"2"
    },
    {
      card_img:"https://cdn.pixabay.com/photo/2023/11/21/15/39/ai-generated-8403627_640.png",
      card_number:"3"
    },
    {
      card_img:"https://cdn.pixabay.com/photo/2024/01/24/15/10/ai-generated-8529788_640.jpg",
      card_number:"4"
    },
    {
      card_img:"https://cdn.pixabay.com/photo/2024/04/04/12/26/ai-generated-8675021_640.png",
      card_number:"5"
    },
    {
      card_img:"https://cdn.pixabay.com/photo/2024/04/16/16/25/ai-generated-8700383_640.jpg",
      card_number:"6"
    },
    {
      card_img:"https://cdn.pixabay.com/photo/2023/09/25/03/27/ai-generated-8274116_1280.png",
      card_number:"7"
    },
    {
      card_img:"https://cdn.pixabay.com/photo/2024/01/10/03/29/ai-generated-8498790_640.jpg",
      card_number:"8"
    },
    {
      card_img:"https://cdn.pixabay.com/photo/2022/07/27/10/00/butterfly-7347546_640.jpg",
      card_number:"9"
    },
    {
      card_img:"https://cdn.pixabay.com/photo/2022/11/01/13/19/autumn-7562289_640.jpg",
      card_number:"10"
    },
    {
      card_img:"https://cdn.pixabay.com/photo/2024/06/21/08/21/hut-8843868_640.jpg",
      card_number:"11"
    },
    {
      card_img:"https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
      card_number:"12"
    },



  ];
    return (
      <>
        <div>
        <h4 className='text-center text-3xl font-bold m-15 p-4'>All the cards are here.</h4>
        <div className='flex flex-row flex-wrap gap-10 items-center justify-center'>
          <Card card_data = {prop_obj} />
        </div>
        </div>
      </>
    )   
  }

export default App
