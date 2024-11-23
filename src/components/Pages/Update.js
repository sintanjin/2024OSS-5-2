import React, { useState } from 'react';
import axios from "axios"
import {Link } from "react-router-dom";

let count =0;
export default function Update() {
    
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
            setPlayerList(response.data);
        })
        .catch((error)=>{
          console.log(error);
        })
        
      }
      axios_get();
      function matching(){
        count =0;
        const id_matching = playerList.map((item)=>{
            let id = document.getElementById("player_id").value;
            let uniform = document.getElementById("uniform2");
            let country = document.getElementById("country2");
            let position = document.getElementById("position2");
            let name = document.getElementById("name2");
            if(id===item.id){
                uniform.setAttribute("value", item.uniform_number)
                country.setAttribute("value", item.country)
                position.setAttribute("value", item.position)
                name.setAttribute("value", item.name)
            }
        })
      }
    
    const axios_put =() =>{
        let id = document.getElementById("player_id").value;
        let uniform = document.getElementById("uniform2").value;
        let country = document.getElementById("country2").value;
        let position = document.getElementById("position2").value;
        let name = document.getElementById("name2").value;
        count++
        console.log(count);
        
        const data = {
            uniform_number:uniform,
            country:country,
            position:position,
            name:name
        }
        axios.put("https://672818aa270bd0b975544f4d.mockapi.io/api/v1/arsenal/"+id,data)
            .then((response) => {
            console.log(response);
            })
            .catch((error) => {
            console.log(error);
            }) 
    }
  return (
    <>  
        <input id="player_id" type="text" placeholder="id" onChange={matching}/>
        <br/>
        <input id="uniform2" type="text" placeholder="uniform number" onChange={axios_put}/>
        <br/>
        <input id="country2" type="text" placeholder="country" onChange={axios_put}/>
        <br/>
        <input id="position2" type="text" placeholder="position" onChange={axios_put}/>
        <br/>
        <input id="name2" type="text" placeholder="name" onChange={axios_put}/>
        <Link to="/list">
            <button type="button" class="btn btn-primary">
                돌아가기
            </button>
        </Link>
        <br/>
        <br/>
        <p>changing count: {count}</p>
        <input id="count" type="number" disabled/>
        
    </>
    
  )
}
