import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Ncard from "./Ncard";
ReactDOM.render(
    <>
        <div className="heading">
            <h1>Top 5 Netflix Series</h1>
        </div>


    <div className="main_container">

        <Ncard imgsrc="https://wallpapercave.com/wp/wp8441228.jpg" 
        title="Stranger things" />

        <Ncard imgsrc="https://imgs.search.brave.com/062FY4QLwK_bp8oUCpmesldGVjhIJBZ11v8t9Jm9aTg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlbW92aWVkYi5v/cmcvdC9wL3c1MzNf/YW5kX2gzMDBfYmVz/dHYyL2d3N05JbkNp/alI3ZUExbVRsbHJ0/eEI3c2hCSi5qcGc" 
        title="Mismatched" />

        <Ncard imgsrc="https://tse3.mm.bing.net/th?id=OIP.qaFv2sqXZ5i4RimaDWAkPQHaEK&pid=Api&P=0&h=180" 
        title="HarryPotter" />

        <Ncard imgsrc="https://i.ytimg.com/vi/C_-lj5k9Tik/maxresdefault.jpg" 
        title="Hostel Daze" />

        <Ncard imgsrc="https://keeperfacts.com/wp-content/uploads/2021/06/Keeperfacts.com-13.jpg" 
        title="Dark" />

    </div>

    </>,document.getElementById("root")
);