import React from "react";
import "./card.css";


const Card = ({title, description, button}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-body">{description}</p>
                <a className="button" href="#">{button}</a>
            </div>
        </div>
    )
}

Card.defaultProps = {
    title: "Something Awesome",
    description: `This is some sample text for something awesome. Have you heard the great news about our Lord and Savior, something awesome? If not I'd love to invite you to hear a sermon on something awesome.`,
    button: "Learn More"
}

export default Card;