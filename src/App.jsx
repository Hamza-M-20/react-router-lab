import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MailboxList from './components/MailboxList/MailboxList'
import MailboxForm from './components/MailboxForm/MailboxForm'
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import LetterForm from './components/LetterForm/LetterForm'


const App = () => {
   const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (boxData) => {
    const newMailbox = {
      ...boxData,
      _id: mailboxes.length +1,
    };
setMailboxes((prev) => [...prev, newMailbox]);
  };
 
  const sendLetter = (newLetter) => {
  setLetters((prev) => [...prev, newLetter]);
  };
  
  return (
    <>
    
     <NavBar />
    <h1>Mailbox List</h1>
   <Routes>
    <Route path='/' element={<main><h2>Post Office</h2></main>} />
    <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>} />
       <Route path="/mailboxes/:mailboxId"element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
    <Route path='/new-mailbox' element={<MailboxForm onAdd={addBox}/>} />
    <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} onSendLetter={sendLetter}/>} />

   </Routes>
  
    </>
    
  )
}

  
  

export default App;
