import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const DetailsPage = () => {
    const { user, isLoading } = useSelector((state) => state.auth)
    if (isLoading) {
        return (
            <div className="container  text-center bg-[#141C2F] h-[100vh] w-100">
                <h1 className='text-2xl p-10 text-white '>Loading....</h1>
            </div>
        )
    }


    if (user) {
        return (
            <>
                <div className='sm:w-[100%] w-full h-auto flex flex-col items-center justify-center'>

                    <div className="sm:p-8 p-4 sm:w-[100%]  h-[60vh] sm:flex justify-center text-sm text-gray-500  bg-[#1F2A48] border border-gray-400 rounded-2xl shadow-sm  ">
                        <div className='flex justify-center w-auto sm:px-1 sm:mt-0 mt-2 sm:mr-10 sm:visible  '>

                            <a href="#">
                                <img className="sm:w-32 w-[55px] sm:h-24 rounded-full" src={!user ? "" : user.avatar_url} alt="Jese Leos" />
                            </a>
                        </div>
                        <div className=" mx-2 w-full mt-1">
                            <div className='flex justify-between'>
                                <div>
                                    <p className="text-2xl font-bold leading-none text-gray-200 dark:text-white">
                                    
                                        <a href="#">{!user ? "" : user.name}</a>
                                    </p>
                                </div>
                                <div>
                                    <p type="text" className="text-gray-200 font-medium rounded-lg text-xs">Joined  {new Date(!user ? "" : user.created_at).toUTCString("en-IN").slice(0, 16)}</p>
                                </div>

                            </div>


                            <p className="mb-2 mt-2 text-sm text-blue-400 font-normal">
                                <a href={!user ? "" : user.html_url} className="hover:underline">@{!user ? "" : user.login}</a>
                            </p>
                        
                            <p className=" w-full mt-5 p-1 h-20 flex  items-center text-sm text-gray-300">{!user ? "" : (!user.bio ? "No bio" : "")} </p>

                            <div className='border-none sm:mt-5 sm:py-7 py-3 w-full rounded-xl bg-[#141C2F] flex justify-around '>
                                <ul className="flex  text-sm w-full justify-around text-gray-200">
                                    <li className="me-2 flex flex-col">
                                        <span>Repose</span>
                                        <a href="#" className="hover:underline">
                                            <span className="font-semibold text-gray-100 dark:text-white">{!user ? "" : user.public_repos}</span>
                                        </a>
                                    </li>
                                    <li className="me-2 flex flex-col">
                                        <span>Gists</span>
                                        <a href="#" className="hover:underline">
                                            <span className="font-semibold text-gray-100 dark:text-white">{!user ? "" : user.public_gists}</span>
                                        </a>
                                    </li>
                                  
                                </ul>
                            </div>

                            <div className='sm:p-4 mt-2 sm:pr-20 text-gray-300 sm:text-[16px]'>
                                <ul className='flex justify-between items-center gap-4'>
                                    <span className='flex flex-col gap-3'>
                                        <li>
                                            <span className='flex items-center gap-1'>
                                                <FaLocationDot />
                                                <a href={!user ? "" : (!user ? "" : user.location)}>{!user ? "" : (!user.location ? "Dehli,India" : user.location)}</a>
                                            </span>
                                        </li>
                                        <li>
                                            <span className='flex items-center gap-1'>
                                                <IoIosLink />
                                                <a href={!user ? "" : user.html_url}>{!user ? "" : user.html_url}</a>
                                            </span>
                                        </li>
                                    </span>
                                    <span className='flex flex-col gap-3'>
                                        <li>
                                            <span className='flex items-center gap-1'>
                                                <FaTwitter />
                                                <a href={!user ? "" : user.twitter_username}>{!user ? "" : (!user.twitter_username ? "Not Available" : user.twitter_username)}</a>
                                            </span>
                                        </li>
                                        <li>
                                            <span className='flex items-center gap-1'>
                                                <BsBuildingsFill />
                                                <a href={!user ? "" : user.repos_url}>gitHub</a>
                                            </span>
                                        </li>
                                    </span>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
                {/* <div className='mt-10 sm:mx-1'>
                    <Link to={"/repos"} className='border-[1px] rounded-xl text-white text-xs p-2' type='button'>
                        View All Repos
                    </Link>
                </div> */}

            </>
        )
    }
}

export default DetailsPage