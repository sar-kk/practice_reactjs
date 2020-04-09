// creating new component using functional component

//import react module
import React from 'react';
import "./card-style.css";


// creating functional component
const Card = props => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt ="image-1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className = "card-title">Card Title</h4>
                <p className="card-text text-secondary">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo natus, necessitatibus! Asperiores, deleniti eius eligendi est eum ipsam minus natus, non nostrum quos ullam veniam.
                </p>
                <a href="#" className="btn btn-outline-info"> See more</a>
            </div>
        </div>

    );
}
export default Card;