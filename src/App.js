import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import { HashRouter } from "react-router-dom";

function App() {
   return (
      <div>
         <HashRouter basename="/Portfolio">
            <BaseLayout />
         </HashRouter>
      </div>
   );
}

export default App;
