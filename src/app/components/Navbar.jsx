'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SignIn from '../components/SignIn';
import { Fragment } from "react";
import { useState } from 'react';

export default function Navbar() {
    const [showSignin, setShowSignin] = useState(false);
    return (
        <Fragment>
        <nav className="bg-white text-myBrown flex flex-col w-full font-lexend fixed top-0 z-50 shadow-lg">
            <div className="flex flex-row h-1/4 p-2">
                <span className=" w-1/3 ml-4">Handmade in Bosnia and Herzegowina</span>
                <div className=" w-2/3 flex flex-row justify-end">
                    <div id="search">
                        <span>Search</span> 
                        <input className="card-field-input text-myBrown "placeholder="  _____________"/>
                    </div>
                    
                    <div className="flex-row flex mr-4 ml-4 ">
                        <FontAwesomeIcon icon={faUser} className="w-4 p-0.5"/><button onClick={() => setShowSignin(true)}>Sign in</button></div>
                    </div>                           
            </div>
            <div className="text-chocolate h-2/4 text-center text-2xl pt-4">
                <span className="font-koulen ">mymini.</span>
                <span>corner</span>
            </div>

            <div className="flex flex-row h-1/4 justify-center py-2">
                <ul className="flex flex-row">
                    <li><a className="px-4" href="#">Shop</a></li>
                    <li><a className="px-4" href="#">Our Story</a></li>
                    <li><a className="px-4" href="#">Contact us</a></li>
                    <li><a className="px-4" href="#">Special Deals</a></li>
                </ul>
            </div>

            
        </nav>
        { <SignIn isVisible={ showSignin } onClose={() => setShowSignin(false)}/>}
        </Fragment>

    );
}