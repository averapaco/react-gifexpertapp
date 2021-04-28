import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} ></AddCategory>
      <hr/>
      {
        categories.map(categoria => {
          return <GifGrid key={categoria} categoria={categoria} ></GifGrid>
        })
      }
    </Fragment>
  )
}
