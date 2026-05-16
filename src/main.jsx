import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
  position="top-right"
  // reverseOrder={false}

  toastOptions={{
    style: {
      background: "#141414",
      color: "#fff",
      border: "1px solid #333",
    },

    success: {
      iconTheme: {
        primary: "#E50914",
        secondary: "#fff",
      },
    },

    error: {
      iconTheme: {
        primary: "#ff4b4b",
        secondary: "#fff",
      },
    },
  }}
/>
    <App />
  </StrictMode>,
)
