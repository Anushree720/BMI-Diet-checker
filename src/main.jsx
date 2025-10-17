import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import Person from './weightcalu'
import MenuToggle from './menu'

import Menu from './menu'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuToggle/>
   
   <Person></Person>
  </StrictMode>
)
