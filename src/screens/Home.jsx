import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import DetailsPage from '../components/DetailsPage'



const Home = () => {

  const { isLoading, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const [text, setText] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllUsers(text))
    setText("")
  }



  useEffect(() => {
    dispatch(getAllUsers())
  }, [])




  if (isLoading) {
    return (
      <div className="container text-center bg-[#141C2F] w-100 h-[100vh]">
        <h1 className='text-2xl text-white p-10'>Loading....</h1>
      </div>
    )
  }


  return (
    <>
      <div className='home bg-[#141C2F] sm:w-full h-[100vh] flex flex-col justify-center items-center'>

      <h1 className='text-6xl text-white '>Discover like never before!</h1>
    <p className='text-xl text-gray-200 pb-3'>Find GitHub users and explore their repositories, gists, and more with a simple search.</p>
        <form className="md:w-[60%] w-full px-5   md:mx-40 md:py-5" onSubmit={handleSubmit}>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-6 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 sm:text-xl text-xs text-white border-none rounded-lg bg-[#1F2A48]  dark:text-white" placeholder="Search GitHub Username..." required value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit" className="text-white absolute end-2.5 sm:bottom-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 sm:py-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>


        <div className='sm:w-[60%]  w-full p-5'>
          <DetailsPage />
        </div>
      </div>
    </>
  )
}

export default Home