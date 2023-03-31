import React, { useEffect, useState } from "react";
import "../Style/Home.css";
import {SuccessMsg,ErrorMessage} from "../utils/AllMessage"
import {  useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { allUser,assignUser } from "../Redux/UserReducer";
import TableComponents from "../components/TableComponents";

const Home = () => {
    const [inputText,setInputText] = useState("")
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
 

  const handleInput = ()=>{
    if(inputText == "") {
        ErrorMessage("Please Fill Input Field")
    }else{
        dispatch(assignUser(inputText))
        SuccessMsg("Add New User Succesfully")
        setInputText("")
    }
    
  }


  useEffect(() => {
    if(user?.length == 0){
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => dispatch(allUser(res.data)))
        .catch((err) => window.alert("Server Problem"));
    }
  
  }, []);
  return (
    <div className="homeWrapper">
      <div className="homeChild">
        <div className="inputWrapper">
          <input type="text" value={inputText} onChange={(e)=> setInputText(e.target.value)} /> <button  onClick={handleInput}>Add Item</button>
        </div>
        <TableComponents ></TableComponents>
      </div>
    </div>
  );
};

export default Home;
