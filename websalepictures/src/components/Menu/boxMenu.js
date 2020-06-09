import React from 'react';
import './styleMenu.css';

export default class Menu extends React.Component{
    render (){
        return(
            <div className='box-Menu'>
                <button className='menu-item'>Home</button>
                <button className='menu-item'>About US</button>
                <button className='menu-item'>Services</button>
                <button className='menu-item'>Category</button>
                <button className='menu-item'>User</button>
            </div>
        );
    }
}