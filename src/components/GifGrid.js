import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem'
export const GifGrid = ({categoria}) => {


  const {loading, data} = useFetchGifs(categoria);

  return (
    <>
      <p className="animate__fadeInUp">{categoria}</p>
      { loading && <p>Loading</p>}
      <div className="card-grid">
        {
          data.map((img) => (
            <GifGridItem key={img.id} {...img}></GifGridItem>
          ))
        }
      </div>
    </>
  )
}
