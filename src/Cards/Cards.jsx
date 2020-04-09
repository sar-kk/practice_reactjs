import React, {Component} from 'react'
import Card from "./CardUI";
import  img1 from '../images/1.jpg'
import  img2 from '../images/2.jpg'
import  img3 from '../images/3.jpg'
import  img4 from '../images/4.jpg'
//creating component class

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img2}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img4}/>
                    </div>
                </div>
            </div>
        );
    }


}

export default Cards;