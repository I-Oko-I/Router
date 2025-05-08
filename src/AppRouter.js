import { createBrowserRouter, Navigate } from "react-router-dom"

import { FeedComponent } from './project/FeedComponent.js';
import { Layout } from './project/LayOut';
import { PostComponent } from './project/PostsFile/PostComponent.js';
import { AddContainer, Temp } from './project/Add/AddContainer.js';
import { Mistake } from './project/Mistake/Mistake.js';

export const mainRouter = createBrowserRouter([
  
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
              element:<FeedComponent/>,
            },
            {
                path:":id/",
                element:<PostComponent/>, 
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
      element: <AddContainer/>
    }
    // 
  ])