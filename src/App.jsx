import React from 'react'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'

import Error from './pages/Error'
import Home from './pages/Home'
import Root from './pages/Root'
import SingleMovieDetails from './pages/SingleMovieDetails'

import { loader } from './pages/Home'
import { loader as singleMovieLoader } from './pages/SingleMovieDetails'

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    // errorElement={<Error/>}
    <Route path='/'   element={<Root/>}  >
      <Route index element={<Home/>} loader={loader} />
      <Route path='/detail/:ImdbId' element={<SingleMovieDetails/>}  loader={singleMovieLoader}  />
      <Route path='*' element={<Error/>}/>
      <Route/>
    </Route>
  ))
  return (
   <RouterProvider router={router}  />
  )
}

export default App