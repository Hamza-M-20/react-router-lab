import { useParams } from "react-router-dom";
const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const boxId = Number(mailboxId);

  if (!mailboxes || !letters) return <p>Loading...</p>;

  const mailbox = mailboxes.find((box) => box._id === boxId);
  if (!mailbox) return <p>Mailbox not found.</p>;

  const boxLetters = letters.filter((letter) => letter.mailboxId === boxId);

  return (
    <div className="mail-box">
      <h2>Mailbox #{mailbox._id}</h2>
      <p>Owner: {mailbox.boxOwner}</p>
      <p>Size: {mailbox.boxSize}</p>

      <h3>Letters:</h3>
      {boxLetters.length === 0 ? (
        <p>No letters yet.</p>
      ) : (
        <ul>
          {boxLetters.map((letter, index) => (
            <li key={index}>
              <strong>To:</strong> {letter.recipient}<br />
              <strong>Message:</strong> {letter.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MailboxDetails;
