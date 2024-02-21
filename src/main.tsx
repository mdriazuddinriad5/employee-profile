import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './pages/Home/Home';
import { Grid } from '@mui/material';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Grid sx={{ backgroundColor: '#FAFBF6' }}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Grid>
)
