import React from "react";

export default function (props)  {
    console.log(props);
    return (
        <div className="card" style={{width: "18rem"}}>
            
            <img src={props.imgUrl} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
                    <p class="card-text" >{props.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
                );
}