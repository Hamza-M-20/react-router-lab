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
  const [letters, setLetters] = useState([]);
  const [mailboxes, setMailboxes] = useState([]);
  const addLetter = () => {
    setLetters((prev) => [...prev, setLetters]);
  }
  const sendLetter = (newLetter) => {
  setLetters((prev) => [...prev, newLetter]);
  
  const addBox = (boxData) => {
    const newMailbox = {
      ...boxData,
      _id: mailboxes.length +1,
    };
setMailboxes((prev) => [...prev, newMailbox]);
  }
  return (
    <>
    <BrowserRouter>
     <NavBar />
    <h1>Mailbox List</h1>
   <Routes>
    <Route path='/' element={<main><h2>Post Office</h2></main>} />
    <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>} />
       <Route path="/mailboxes/:mailboxId"element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
    <Route path='/new-mailbox' element={<MailboxForm onAdd={addBox}/>} />
    <Route path="/new-letter" element={<LetterForm onSendLetter={sendLetter}/>} />

   </Routes>
   </BrowserRouter>
    </>
    
  )
}
}
  
  

export default App;
