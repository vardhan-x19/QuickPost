import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './routers/App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";

import {RouterProvider, createBrowserRouter} from "react-router-dom"
import HomeComps from './routers/HomeComps.jsx';
import Posts from './routers/Posts.jsx';
import { Provider } from 'react-redux';
import store from './Store/store.js';
import Reactions from './routers/Reactions.jsx';
const router=createBrowserRouter([
  {
    path : "/", 
    element : <App/>,
    children:[
    { path : "/", 
      element : <HomeComps/>,
    //  loader :loaderPosts
    },
    {path : "/create-post",
       element :<Posts/>
    },
    {path : "/liked-post",
       element :<Reactions/>
    },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={router} >
    <App></App>
    </RouterProvider>
    </Provider>
  </React.StrictMode>
)
