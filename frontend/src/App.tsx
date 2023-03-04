import React from 'react';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import logo from './logo.svg';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
