import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Foot() {
    return (
        <footer className="foter text-dark py-5" >
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>Homes</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark">About Online Assessment</a></li>
                            <li><a href="#" className="text-dark">Register</a></li>
                            <li><a href="#" className="text-dark">Contact Us</a></li>
                            <li><a href="#" className="text-dark">Terms / Privacy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Resources</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark">Explore Content</a></li>
                            <li><a href="#" className="text-dark">Blog</a></li>
                            <li><a href="#" className="text-dark">YouTube</a></li>
                            <li><a href="#" className="text-dark">Security</a></li>
                            <li><a href="#" className="text-dark">Help Center</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Terms & Conditions</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark">Careers</a></li>
                            <li><a href="#" className="text-dark">Privacy policy</a></li>
                            <li><a href="#" className="text-dark">Student privacy policy</a></li>
                            <li><a href="#" className="text-dark">Inclusion and accessibility policy</a></li>
                            <li><a href="#" className="text-dark">Feedback</a></li>
                            <li><a href="#" className="text-dark">Acceptable use policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Follow Us</h5>
                        <a href="#" className="text-dark"><FontAwesomeIcon icon={faFacebookF} size="2x" className="m-3" /></a>
                        <a href="#" className="text-dark"><FontAwesomeIcon icon={faTwitter} size="2x" className="m-3" /></a>
                        <a href="#" className="text-dark"><FontAwesomeIcon icon={faYoutube} size="2x" className="m-3" /></a>
                        <a href="#" className="text-dark"><FontAwesomeIcon icon={faTiktok} size="2x" className="m-3" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Foot;
