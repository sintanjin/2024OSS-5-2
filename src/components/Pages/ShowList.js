import React, { useState } from 'react';
import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './List';
import Detail from './Detail';
import Update from './Update';

export default function ShowList() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='' element={<List />} />
        <Route path='/list' element={<List />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/update' element={<Update />} />
      </Routes>
    </BrowserRouter>

  )
}
