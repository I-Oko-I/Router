
import { createBrowserRouter, RouterProvider, Navigate, useNavigate, redirect } from 'react-router-dom';
import './App.css';

import { Feed } from './project/FeedComponent.js';
import { Layout } from './project/LayOut';
import { Post } from './project/PostsFile/PostComponent.js';
import { AddTemplate, Temp } from './project/Add/AddContainer.js';
import { Mistake } from './project/Mistake/Mistake.js';

// import { T_It } from './project/Topics/PostTemplate';



function App() {
  
  return (
    <RouterProvider router={router}/>
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
