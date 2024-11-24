import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {HashRouter } from "react-router-dom";

function App() {
   return (
      <div>
         <BrowserRouter basename="/Portfolio">
            <BaseLayout />
         </BrowserRouter>
      </div>
   );
}

export default App;

