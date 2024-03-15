import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider,createBrowserRouter}from 'react-router-dom'
import Login from './login';
import Home from './Home';
import Counter from './counter';
import ViewPosts from './view-posts';
import Registration from './Registration';
import App from './App';
import CreatePost from './CreatePost';
const router=createBrowserRouter([
  {
    path : "/",
    element : <Home></Home>,
    errorElement : <h1>Page Not Found</h1>
  },
  {
    path :"/app",
    element : <App></App>,
  },
  {
    path :"/posts",
    element : <ViewPosts></ViewPosts>,
  },
  {
    path:"/Counter",
    element:<Counter/>,
  },
  {
    path:"/register",
    element:<Registration></Registration>,
  },
  {
    path : "/login",
    element : <Login></Login>
  },
  {
    path : "/createpost",
    element : <CreatePost></CreatePost>
  }
  // {
  //   path:"/ViewPosts.js"
  //   element:<h1>ViewPost</h1>,
  // }
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);