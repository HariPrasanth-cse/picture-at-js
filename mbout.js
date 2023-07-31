import React, { Component } from "react";
import Iphone14 from "./Images/iphone.jpg";
import Arp from "./Images/rog.jpg";
import op from "./Images/one+.jpg";
import './mbout.css'
class Mobile extends Component{
    render(){
        return(
            <div id="bgc">
                <h1 id="cen">MOBILES</h1>
                <div id="cent">
                    <img src={Arp} className="photos" alt="Asus" />
                </div>
                <h1 id="cen">Asus Rog</h1>
                <br/>
                <div id="cent">
                    <img src={Iphone14} className="photos" alt="Iphone"/>
                </div>
                <h1 id="cen">Iphone 14 pro</h1>
                <br/>
                <div id="cent">
                    <img src={op} className="photos" alt="oneplus"/>
                </div>
                <h1 id="cen">One Plus</h1>
                <br/>
            </div>


            
        );
    }
}

export default Mobile;