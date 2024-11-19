import React from "react";
import boom from "./images/boom.png";
function Online(){
    return(
        <section className="bg-light py-5">
        <div className="container text-center">
            <h1>How online assessment works</h1>
            <img src={boom}  alt="" style={{width:'90%'}} className="img-fluid" width="50%"></img>
        </div>
    </section>
    );
}
export default Online;