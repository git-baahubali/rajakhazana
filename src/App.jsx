import { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { SupabaseClient } from '@supabase/supabase-js';
// import { supabase } from '../supabaseClient';
import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import {useUser} from "@clerk/clerk-react"

function App() {

  const queryClient = new QueryClient();
  const { isSignedIn } = useUser(); // Hook to check if user is logged in

  const ProtectedRoute = ({ children }) => {
    if (!isSignedIn) {
      // If user is not signed in, redirect to login page
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isSignedIn?<Home/>:<Login />} />
          <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          {/* <Route path="/Routine/:routineId" element={<Routine />} /> */}
          <Route path="/Cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App


