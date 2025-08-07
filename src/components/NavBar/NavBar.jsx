
import { BrowserRouter } from "react-router";
import { Link } from "react-router";
const NavBar = (props) => {
    return (
        <nav className="nav-links">
            <ul>
         <li> <Link to="/">Home</Link> </li>
         <li> <Link to="/mailboxes">Mailboxes</Link> </li>
         <li> <Link to="/new-mailbox">New Mailbox</Link> </li>
                
            </ul>
        </nav>
    )
}
export default NavBar;