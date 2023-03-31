import React, { useState } from 'react'
import { BsFillEyeFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { useSelector,useDispatch } from 'react-redux';
import {deleteUser,updateUser} from "../Redux/UserReducer"
import { useNavigate } from "react-router-dom";

const TableComponents = () => {
  const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const [updatedInput,setUpdatedInput] = useState({})

  return (
    <div className="tableWrapper">
    <table>
      <thead>
       
        <th>Name</th>
        <th>Details</th>
        <th>Update</th>
        <th>Delete</th>
      </thead>
      <tbody >
        {user?.map(({id,name}, ind) => {
          return (
            <tr key={ind}>
              
              <td>
                {
                   updatedInput.id !== id ? ( name) : (
                    <input type='text' className='text-black' value={updatedInput.name} onChange={(e)=> setUpdatedInput({...updatedInput, name : e.target.value})}/>
                   )
                }
               
                
               </td>
              <td>
                <button className="text-teal-950 text-2xl" onClick={()=> navigate(`/${id}`)}>

                  <BsFillEyeFill></BsFillEyeFill>
                </button>
              </td>
              <td>{
                updatedInput.id !== id ? (
                  <button className="text-teal-950 text-2xl my-1 p-1" onClick={()=> setUpdatedInput({id,name})}>
                  <FiEdit></FiEdit>
                </button>
                ) : (
                  <button className='bg-slate-950 p-1 my-1' 
                  onClick={()=> {
                    dispatch(updateUser(updatedInput))
                    setUpdatedInput({})
                  }}
                  >Update</button>
                )
                }
              

               
              </td>
              <td>
                <button className="text-red-900 text-2xl" onClick={()=> dispatch(deleteUser(id))}>
                  <AiFillDelete></AiFillDelete>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )
}

export default TableComponents