import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'

const HomeRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default HomeRoutes