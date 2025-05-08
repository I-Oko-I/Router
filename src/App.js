
import { createBrowserRouter, RouterProvider, Navigate, useNavigate, redirect} from 'react-router-dom';
import './App.css';


import { createContext, useContext, useState } from 'react';

import { Context_XportData, } from './AppContext.js';
import { mainRouter } from './AppRouter.js';


// export let Context_XportData = createContext(undefined)

function App() {

  let [state_XportData, setState_XportData] = useState(initXportData)

  return (
    <Context_XportData.Provider value={{state_XportData, setState_XportData}}>
      <RouterProvider router={mainRouter}/>
    </Context_XportData.Provider>
  );
}
export default App;




let initXportData = [
  {
      "id":1,
      "topic":"it",
      "content": [
          {"article": "Компьютер съел человека"},
          {"text": "Это сделала Nvidia - покупайте AMD"}
          
      ]
  },
  {
      "id":2,
      "topic":"common",
      "content": [
          {"article": "Лев съел человека"},
          {"text": "Не кормите через решетку животных"}
      ]
  }
]


