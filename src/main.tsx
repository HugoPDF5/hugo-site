import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './components/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<> </>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
