import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './components/Home'
import { About } from './components/About'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/> } />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
