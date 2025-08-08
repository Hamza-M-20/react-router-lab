import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = ({mailboxes, onSendLetter}) => {
const [selectedBox, setSelectedBox] = useState("");
const [recipient, setRecipient] = useState("");
 const [message, setMessage] = useState("");
 const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLetter = {
      boxId: selectedBox,
      recipient,
      message,
    };
    console.log("Sending letter:", newLetter);
     onSendLetter(newLetter);            
    navigate(`/Mailboxes/ ${selectedBox}`);
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Send a New Letter</h2>

      <label htmlFor="boxSelect">Send to Mailbox:</label>
      <select
        id="boxSelect"
        value={selectedBox}
        onChange={(e) => setSelectedBox(e.target.value)}
        required
      >
        <option value="">-- Select Mailbox --</option>
        {mailboxes.map((box) => (
          <option key={box._id} value={box._id}>
            Mailbox #{box._id}
          </option>
        ))}
      </select>

      <label htmlFor="recipient">Recipient Name:</label>
      <input
        id="recipient"
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>

      <button type="submit">Send Letter</button>
    </form>
  );
};
    

export default LetterForm;