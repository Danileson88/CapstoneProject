import Nav from "../components/Nav";
import { Link } from "react-router-dom";

export default function Confirmedbooking() {
    return(
        <>
            <Nav/>
            <div>
                <h1>Booking Successfull!</h1>
                <h2><Link to='/' className="contact-link">Booking Confirmed! Click here to return Home</Link></h2>
            </div>
        </>
    )
};