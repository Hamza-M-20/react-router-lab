import { useParams } from "react-router";
const MailboxDetails = (props) => {
const { mailboxId } = useParams();
const selectedBox = props.mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)
);
  if (!selectedBox) return <p>Mailbox not found.</p>;

  return (
    <div className="mail-box">
      <h2>Mailbox #{selectedBox._id}</h2>
      <p>Owner: {selectedBox.boxOwner}</p>
      <p>Size: {selectedBox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;
