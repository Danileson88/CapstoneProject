import React from "react";

export default function Footer() {
    return(
        <footer>
            <img src="images/footerLogo.png" className="footer-img"/>
            <ul className="ul-Footer">
                <p className="Footer-Nav">Doormat Navigation</p>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Menu</a>
                </li>
                <li>
                    <a>Reservations</a>
                </li>
                <li>
                    <a>Order Online</a>
                </li>
                <li>
                    <a>Login</a>
                </li>
            </ul>
            <ul className="ul-Footer">
                <p className="Footer-Nav">Contact</p>
                <li>
                    <a>Address</a>
                </li>
                <li>
                    <a>Phone Number</a>
                </li>
                <li>
                    <a>Email</a>
                </li>
            </ul>
            <ul className="ul-Footer">
                <p className="Footer-Nav">Social Media Links</p>
                <li>
                    <a>Facebook</a>
                </li>
                <li>
                    <a>Instagram</a>
                </li>
                <li>
                    <a>Twitter/X</a>
                </li>
            </ul>
        </footer>
    )
}