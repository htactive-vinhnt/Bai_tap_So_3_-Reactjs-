import React from 'react';
import './style.css';

export default class ProductView extends React.Component {
    render () {
        const {title, linkImg, price, Descrip} = this.props;
        return(
            <div className='product-box'>
                
                <img src={linkImg} className="img-responsive product-img" alt="Image"/>
                <h3 className='title-product'>{title}</h3>
                <p className='price'>{price}</p>
                <div className='button-erea'>
                    <button className='btn-by'>By Now</button>
                    <button className='btn-add'>Add to card</button>
                </div>
                <p class='descript'>{Descrip}</p>
            </div>
        );
    }
}