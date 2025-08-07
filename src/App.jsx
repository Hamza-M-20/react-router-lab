import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter } from 'react-router'
import {Route, Routes } from 'react-router'
import MailboxList from './components/MailboxList/MailboxList'
import MailboxForm from './components/MailboxForm/MailboxForm'
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";


const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const addBox = (boxData) => {
    const newBox = {
      ...boxData,
      _id: mailboxes.length +1,
    };
setMailboxes((prevMailboxes) => [...prevMailboxes, newMailbox]);
  }
  return (
    <>
     <NavBar />
    <h1>Mailbox List</h1>
   <Routes>
    <Route path='/' element={<main><h2>Post Office</h2></main>} />
    <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>} />
     <Route path="/Mailbox 1" element={<MailboxDetails mailboxes={mailboxes} />} />
  <Route path="/Mailbox 2" element={<MailboxDetails mailboxes={mailboxes} />} />
  <Route path="/mailbox 3" element={<MailboxDetails mailboxes={mailboxes} />} />
    <Route path='/new-mailbox' element={<MailboxForm onAdd={addBox}/>} />
   </Routes>
    </>
    
  )
}

  
  

export default App;
