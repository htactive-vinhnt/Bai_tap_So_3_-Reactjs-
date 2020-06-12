import React from 'react';
import './styleMenu.css';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component{
    render (){
        return(
            <nav>
                <ul>
                    <li><Link className='Link' to='/home'>Home</Link></li>
                    <li><Link className='Link' to='/about'>About US</Link></li>
                    <li><Link className='Link' to='/services'>Services</Link></li>
                    <li><Link className='Link' to='/profile'>profile</Link></li>
                    <li><Link className='Link' to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        );
    }
}