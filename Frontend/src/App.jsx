import React from 'react'
import Navbar from "./Components/Navbar"
import { Route, Routes } from 'react-router-dom'
import CreatePost from './Pages/CreatePost'
import ShowPost from './Pages/ShowPost'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <CreatePost/> }/>
        <Route path='/post' element={ <ShowPost/> }/>
      </Routes>
    </div>
  )
}

export default App