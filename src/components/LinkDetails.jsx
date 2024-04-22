import React from 'react'
import { GrFormView } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { AiOutlineInfo } from "react-icons/ai";
import { CiForkAndKnife } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { useSelector } from 'react-redux';


const LinkDetails = ({ repo }) => {


    const { repos } = useSelector((state) => state.auth)

    return (
        <>
            <div className='sm:p-5 sm:w-[70%] w-[80%] p-3  border-2 rounded-xl bg-gray-900 text-gray-400'>
                <span className='flex items-center gap-1'>
                    <IoIosLink />
                    <a href={repo.html_url} >{repo.name}</a>
                </span>
                <p>{repo.description}</p>
                <span>
                    <ul className='flex gap-1 items-center mt-3 sm:px-5 px-2'>
                        <li className='bg-blue-400 sm:px-5 px-2 rounded-xl text-black opacity-50'>
                            <span className='flex items-center gap-1'>
                                <GrFormView />
                                <h1 className='text-xs'>{repo.watchers_count}</h1>
                            </span>
                        </li>
                        <li className='bg-red-400 sm:px-5 px-2 rounded-xl text-black text-xs opacity-50'>
                            <span className='flex items-center gap-1'>
                                <FaStar />
                                <h1 className='text-xs'>{repo.stargazers_count}</h1>
                            </span>
                        </li>
                        <li className='bg-green-400 sm:px-5 px-2 rounded-xl text-black text-xs opacity-50'>
                            <span className='flex items-center gap-1'>
                                <AiOutlineInfo />
                                <h1 className='text-xs'>{repo.open_issues_count}</h1>
                            </span>
                        </li>
                        <li className='bg-yellow-400 sm:px-5 px-2 rounded-xl text-black text-xs opacity-50'>
                            <span className='flex items-center gap-1'>
                                <CiForkAndKnife />
                                <h1 className='text-xs'>{repo.forks_count}</h1>
                            </span>
                        </li>
                    </ul>
                </span>
            </div>

        </>
    )
}

export default LinkDetails