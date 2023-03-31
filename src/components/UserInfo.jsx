import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom'

const UserInfo = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const [userInfo,setUserInfo] = useState([])
  
  const { user } = useSelector((state) => state.user);
 useEffect(()=>{

       let findUser = user?.filter(item => item.id == id)
       if(findUser){
        setUserInfo(findUser)
       }

 },[])
  return (
    <div>
      <button className='bg-gray-950 text-white p-3' onClick={()=> navigate("/")}>Go Back</button>
      {
        userInfo?.map((item,ind)=>{
          return (
            <p key={ind} className='text-xl'>{item.name}</p>
          )
        })
      }

    </div>
  )
}

export default UserInfo