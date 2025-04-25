
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';

import { Feed } from './project/FeedComponent.js';
import { Layout } from './project/LayOut';
import { Post } from './project/PostsFile/PostComponent.js';
import { Temp } from './project/Temp.js';
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
    path: "/first/",
    element: <Layout/>,
    children: [
      {
        index:true,
        element:<Temp/>,
        // element:<Navigate to="/commom/"></Navigate>,
      },
      {
        path:"common/",
        element:<Feed/>,
        children:[
          {
            path:"1/",
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
  }
  // 
])
