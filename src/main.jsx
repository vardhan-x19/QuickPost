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
import Features from './routers/Features.jsx';
import FAQComponent from './routers/FAQComponent .jsx';
import About from './routers/About.jsx';
import Saved from './routers/Saved.jsx';
import Login from './routers/LogIn.jsx';
import SignUp from './routers/SignUp.jsx';
import Search from './routers/Search.jsx';
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
    {path : "/features",
       element :<Features/>
    },
    {path : "/faqs",
       element :<FAQComponent/>
    },
    {path : "/about",
       element :<About/>
    },
    {path : "/saved",
       element :<Saved/>
    },
    {path : "/login",
       element :<Login/>
    },
    {path : "/signup",
       element :<SignUp/>
    },
    {path : "/search",
       element :<Search/>
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
