import { Link } from "react-router";
const MailboxList = (props) => {
    return (
        <>
        <ul>
    <li> <Link to="/Mailbox 1">Mailbox 1</Link></li> <li> <Link to="/Mailbox 2">Mailbox 2</Link> </li> <li><Link to="/mailbox 3">Mailbox 3</Link></li>
        </ul>
        </>
    )
}
export default MailboxList;