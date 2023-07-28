import React from "react";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Badge from '@mui/material/Badge';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Navbar = (n) => {
    return (<>
        <nav className="navbar bg-light">
            <div className="container fw-semibold font-monospace ">
                <a className="navbar-brand" href="https://www.linkedin.com/in/chandrajeetmaurya/">
                    <img src="https://cdn.vectorstock.com/i/1000x1000/26/14/diary-icon-simple-design-on-a-white-background-vector-41282614.webp" alt="Bootstrap" width="60" height="70" />
                </a>
                <h2 className="shadow_t"> Life Diary <Badge color="secondary" badgeContent={n.size} showZero>
                    <ChatBubbleIcon />
                </Badge> </h2>
            </div>
        </nav>

    </>)
}
export default Navbar;
