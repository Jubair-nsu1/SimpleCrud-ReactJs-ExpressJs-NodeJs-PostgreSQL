import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        
            <nav class="navbar fixed-top navbar-light bg-dark ">
                <form class="container-fluid justify-content-center">
                    <button class="btn btn-outline-success me-2" type="button"><Link to='/'>Home</Link></button>
                    <button class="btn btn-outline-primary me-2" type="button"><Link to='/Second'>Second Page</Link></button>
                    <button class="btn btn-outline-danger me-2" type="button"><Link to='/Logout'>Logout</Link></button>
                </form>
            </nav>
                        
    )
}

export default Header