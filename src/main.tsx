import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './components/Home'
import { About } from './components/About'
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/> } />
          <Route path="/experiences" element={<Experience/> } />
          <Route path="/contact" element={<Contact/> } />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
