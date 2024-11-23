import React, { useState } from 'react';
import axios from "axios"
import { Link } from "react-router-dom";

export default function List() {
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
        <td>{item.name}</td>
      </tr>
    );
  });
  const axios_post = () => {
    let uniform = document.getElementById("uniform").value;
    let country = document.getElementById("country").value;
    let position = document.getElementById("position").value;
    let name = document.getElementById("name").value;
    const data={
        uniform_number:uniform,
        country:country,
        position:position,
        name:name
    }
    axios.post("https://672818aa270bd0b975544f4d.mockapi.io/api/v1/arsenal",data)
        .then((response)=>{
            console.log(response);
            axios_get();
        })
        .catch((error)=>{
            console.log(error);
        })
  }
  const axios_delete = () =>{

    let id = document.getElementById("delete_id").value;
    axios.delete("https://672818aa270bd0b975544f4d.mockapi.io/api/v1/arsenal/"+id,{
        data:{
            id:id
        }
    })
        .then((response) => {
            axios_get();
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        }) 
       
  }
  return (
    <>
    <div class="container text-left">
        <div class="row">
            <div class="col">
                <button onClick={axios_get}>데이터 목록보기</button>
                <div id="div_players">
                  <table class="table" center>
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">uniform number</th>
                          <th scope="col">name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {newArrayData}
                      </tbody>
                  </table>
                </div>
                
            </div>
          <div class="col">
            <Link to="/detail">
                <button type="button" class="btn btn-primary">
                    자세히보기
                </button>
            </Link>
            <br/><br/>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              데이터 추가
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <input id="uniform" type="text" placeholder="uniform number"/>
                      <br/>
                      <input id="country" type="text" placeholder="country"/>
                      <br/>
                      <input id="position" type="text" placeholder="position"/>
                      <br/>
                      <input id="name" type="text" placeholder="name"/>
                            
                  </div>
                  <div class="modal-footer">
                    <button onClick={axios_post}>추가</button>
                  </div>
                </div>
              </div>
            </div>
            <br/><br/>
            <Link to="/update">
                <button type="button" class="btn btn-primary">
                데이터 수정
                </button>
            </Link>
            
            
             
                <br/>
                <br/>
                <input id="delete_id" type="text" placeholder="ID"/>
                <button onClick={axios_delete}>삭제</button>
            </div>
        </div>
            
        
            
    </div>
    </>

  )
}
