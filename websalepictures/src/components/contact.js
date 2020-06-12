import React from 'react';
import './style-form.css'
export default class Contact extends React.Component{
    render(){
        return(
            <div className="container-fluid">
     
      
      <div className="box-Form">
          <form name="contactForm" method="">
              <h3>CONTACT</h3>
              <p>
                If you need anything from us, please don't hesitate to contact with us
                via bellow form. We will contact you as soon as possible.
              </p>
              <div className="input-icons">
                <label for="name">Name</label>
                <input
                  className='input-text'
                  type="text"
                  id="name"
                  name="i-name"
                  placeholder="Please input your name"
                />
                <label for="mail">Your Email</label>
                <input
                  className='input-text'
                  type="email"
                  id="mail"
                  name="i-email"
                  placeholder="input your email address"
                />
                <label for="subject">Subject</label>
                <input
                  className='input-text'
                  type="text"
                  id="subject"
                  name="i-subject"
                  placeholder="What can we do to assist you ?"
                />
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="i-message"
                  placeholder="Please let us know your idea"
                ></textarea>
              </div>
            </form>
          <button type="submit"  onclick="validate()">Send</button>
      </div>
      <div className="infor-Contact">
          <h1>K4CN OFFICAL</h1>
          <i className="fas fa-home info-Contact-Icon"></i>
          <p>150 Duy Tan, Danang, Vietnam</p>
          <i className="fas fa-phone info-Contact-Icon"></i>
          <p>0905 610 229</p>
          <i className="fab fa-skype info-Contact-Icon"></i>
          <p>hoangvhh</p>
          <i className="fa fa-envelope info-Contact-Icon" aria-hidden="true"></i>
          <a href="#">recruit@htactive.com</a>
          <p id="showName"></p>
          <p id="showEmail"></p>
          <p id="showSubject"></p>
          <p id="showMessage"></p>
        </div>
    </div>
        );
    }
}
    
 
