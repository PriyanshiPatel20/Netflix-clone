import React from 'react';

function Ncard(props){
    return (
        <>
            <div className="container">
                <img  className="img_editing" src={props.imgsrc}/>
                <p>Netflix original serirs</p>
                <h3>{props.title}</h3>
                <a><button>Watch Now</button></a> 
            </div>

        </>
    );
}

export default Ncard;