import React, { useEffect } from 'react';
import { createBrowserRouter,RouterProvider,useNavigate } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { clearUser, setUser } from '../utils/userSlice';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
]);

const Body = () => {
  
  const dispatch=useDispatch()
//  const navigate = useNavigate();


 useEffect(() => {
  onAuthStateChanged(auth,(user) => {
    if (user) {
      const {uid,email,displayName} = user;

      dispatch(setUser({uid:uid,email:email,displayName:displayName}));
      console.log("User is signed in:", user);
     // navigate('/browse');

    } else {
      // User is signed out
      dispatch(clearUser());
    //  navigate('/');
      console.log("No user is signed in.");
    }
  });
}, []);
  return <RouterProvider router={appRouter} />;
};  

export default Body;