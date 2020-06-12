import React from "react";
import './style-profile.css'
export default class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }
  render() {
      const linkAva = this.props;
    return (
      <div className="page-Profile">
        <div className="left-profile">
          <div className="box-avatra">
            <img src='https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-0/p526x296/100941344_632918863970195_2591257497431965696_o.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=V1PTA_dNJd4AX_Eb_Xl&_nc_ht=scontent.fdad1-1.fna&_nc_tp=6&oh=82e22fd2c55b7c61edc1735eab9e3bc6&oe=5F07B87E' className="avarta" alt="Image" />
            <button>
                change Avarta <input type='file'/>
            </button>
          </div>
        </div>
        <div className="right-profile"></div>
      </div>
    );
  }
}
