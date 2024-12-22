import React, { useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data,setData]= useState([])
    // useEffect(() => {    
    //     fetch('https://api.github.com/users/chiragm14')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })  
        
    // }, [])
    

  return (
    <div className='text-center text-white text-3xl bg-gray-600 m-4 p-4'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/chiragm14')

    return response.json()
}