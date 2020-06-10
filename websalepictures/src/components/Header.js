import React from 'react';
import './style.css';
import {Redirect} from 'react-router-dom';
export default class Header extends React.Component {
    constructor(props){
        super(props);
    };
    render() {
        const {linkLogo, nameWeb} = this.props;
        return(
            <div className='header-box'>
                <div className='logo'>
                    <img src={linkLogo} className='img-responsive image-logo' alt='Image'/>
                    <h1 className='name-web'>{nameWeb}</h1>
                </div>
                <div className='seach-box'>
                    <input type='text' className='input-seach' />
                    <button className='btn-seach'>Seach</button>
                </div>
            </div>
        );
    }
}