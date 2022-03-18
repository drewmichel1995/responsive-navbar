import React, {useState} from 'react';
import Rocket from './images/rocket.png';
import "./navbar.css"


const Navbar = (props) => {

    const [show, setShow] = useState(false);

    return (
        <>
        <header class="primary-header">
        <div class="brand">
            <img src={Rocket}/>
        </div>

        <button onClick={() => setShow(!show)} class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded={show}></button>
        <nav>
            <ul data-visible={show} id="primary-navigation" class="primary-navigation flex">
                <li class="active">
                    <a href="index.html">
                        <span aria-hidden="true">1</span>Home
                    </a>
                </li>
                <li>
                    <a href="destination.html">
                        <span aria-hidden="true">2</span>Destination
                    </a>
                </li>
                <li>
                    <a href="crew.html">
                        <span aria-hidden="true">3</span>Crew
                    </a>
                </li>
                <li>
                    <a href="technology.html">
                        <span aria-hidden="true">4</span>Technology
                    </a>
                </li>
            </ul>
        </nav>
        </header>
        </>
    );
}

export default Navbar;