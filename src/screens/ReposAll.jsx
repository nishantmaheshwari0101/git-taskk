import React, { useEffect } from 'react'
import LinkDetails from '../components/LinkDetails'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserRepos } from '../features/auth/authSlice'

const ReposAll = () => {


    const { repos, user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()


    if (!user || !repos) {
        return (
            <div className="conatiner text-center h-[100vh] bg-[#141C2F] ">
                <h1 className='white text-2xl p-10 font-bold'>Loading Please Wait</h1>
            </div>
        )
    }

    useEffect(() => {
        dispatch(getAllUserRepos(!user ? "nishantmaheshwari0101" : user.login))
    }, [])

    return (
        <div className='bg-gray-800 h-auto pt-10 flex flex-col gap-3 justify-center items-center'>
            {
                repos.map((repo) => <LinkDetails key={repo.id} repo={repo} />)
            }
        </div>
    )
}

export default ReposAll