import React from "react";
import './Button.css';

function Button ({previous, next, disabledPrevious, disabledNext, pageNumber}) {
    return (
        <div className="buttons" id="top">
    <button className="navButton" onClick={previous} disabled={disabledPrevious}>Back</button>
            <p>{(pageNumber - 1) * 10 + 1}</p>
            <h2>Page: {pageNumber}</h2>
            <p>{pageNumber * 10}</p>
    <a className="navButton" onClick={next} href="#top" id={disabledNext}>Next</a>
    </div>
    )
}

export default Button