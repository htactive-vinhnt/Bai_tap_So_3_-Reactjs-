import React from "react";
import "./style.css";
import ProductView from "./ProductView";
import { theData1, theData2 } from "./data";

export default class Home extends React.Component {
  renderProduct(data) {
    return data.map(element => {
      return (
        <ProductView
          linkImg={element.link}
          title={element.name}
          price={element.Price}
          Descrip={element.Descript}
        />
      );
    });
  }

  render() {
    return (
      <div className='content'>
        {theData1.length ? this.renderProduct(theData1) : "no data"}
      </div>
    );
  }
}
