import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data = useLoaderData()
//     const [data , setData] = useState([])
//     useEffect(()=>{
// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(Response => Response.json())
// .then(data =>{
//     console.log(data);
//     setData(data)
// })
// },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">Github Followes:{data.followers}
        <img className="m-auto pt-2" width={300} src={data.avatar_url} alt="git pitcute" srcset="" />
        </div>

    )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}