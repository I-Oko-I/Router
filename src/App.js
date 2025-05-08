
import { createBrowserRouter, RouterProvider, Navigate, useNavigate, redirect} from 'react-router-dom';
import './App.css';

import { Feed } from './project/FeedComponent.js';
import { Layout } from './project/LayOut';
import { Post } from './project/PostsFile/PostComponent.js';
import { AddTemplate, Temp } from './project/Add/AddContainer.js';
import { Mistake } from './project/Mistake/Mistake.js';
import { createContext, useContext, useState } from 'react';

import { Context_XportData, } from './AppContext.js';


// export let Context_XportData = createContext(undefined)

function App() {

  let [state_XportData, setState_XportData] = useState(initXportData)

  return (
    <Context_XportData.Provider value={{state_XportData, setState_XportData}}>
      <RouterProvider router={router}/>
    </Context_XportData.Provider>
  );
}
export default App;


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
          index:true,
          // element:<Temp/>,
          element:<Navigate to="/common/"></Navigate>,
        },
        // 
        {
          path:":topic/",
          children:[

          {
            index:true,
            element:<Feed/>,
          },
          {
              path:":id/",
              element:<Post/>, 
          },
          ]
        }
        // 
    ]
  },

  {
    path: "/error",
    element: <Mistake/>
  },

  {
    path: "/add",
    element: <AddTemplate/>
  }
  // 
])

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


