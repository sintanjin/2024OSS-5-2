import axios from "axios"
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function Detail() {
    let defaultList=[{
        id:"",
        uniform_number:"",
        country:"",
        position:"",
        name:""
      }]
      const [playerList, setPlayerList] = useState(defaultList);
      const axios_get = ()=>{
        axios.get("https://672818aa270bd0b975544f4d.mockapi.io/api/v1/arsenal")
        .then((response)=>{
          console.log(response.data);
            setPlayerList(response.data);
        })
        .catch((error)=>{
          console.log(error);
        })
        
      }
      const newArrayData = playerList.map((item) => {
        return(
          <tr>
            <td>{item.id}</td>
            <td>{item.uniform_number}</td>
            <td>{item.country}</td>
            <td>{item.position}</td>
            <td>{item.name}</td>
          </tr>
        );
      });
      axios_get();
  return (
    <>
        <table class="table" center>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">uniform number</th>
                    <th scope="col">country</th>
                    <th scope="col">position</th>
                    <th scope="col">name</th>
                </tr>
            </thead>
            <tbody>
                {newArrayData}
            </tbody>
        </table>
        <Link to="/list">
            <button type="button" class="btn btn-primary">
                돌아가기
            </button>
        </Link>
    </>
    
  )
}
