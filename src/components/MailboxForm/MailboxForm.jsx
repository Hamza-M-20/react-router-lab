import { useState } from "react";
import { useNavigate } from "react-router";
const MailboxForm = (props) => {
  const [boxOwner, setBoxOwner] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();
  const handleform = (e) => {
        e.preventDefault();
        const newMailbox = {
            boxOwner,
            boxSize,
        };
    
    props.onAdd(newMailbox); 
    navigate("/mailboxes");
};
    return (
 <form onSubmit={handleform}>
      <div>
        <label htmlFor="boxOwner">Box Owner:</label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          placeholder="Enter name"
           value={boxOwner}
        onChange={(e) => setBoxOwner(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="boxSize">Box Size:</label>
        <select 
        id="boxSize" 
        name="boxSize"
             value={boxSize}
        onChange={(e) => setBoxSize(e.target.value)}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
    );
};

export default MailboxForm;