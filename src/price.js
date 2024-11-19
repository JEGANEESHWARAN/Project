import React from "react";
function Price(){
    return(
        <section className="container-fluid text-center py-5" id="pric">
        <h1>Pick your plan. Change whenever you want.</h1>
        <div className="row mt-5  d-flex justify-content-center">
            <div className="col-md-3 mb-4">
                <div className="card h-100">
                    <div className="card-body" id="loop">
                        <h2>STANDARD</h2>
                        <p>All bare essentials for low-volume testing with limited results analysis.</p>
                        <h3>$29</h3>
                        <p>/per week</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-4">
                <div className="card h-100">
                    <div className="card-body" id="loop">
                        <h2>PRO</h2>
                        <p>Perfect for most users. Test more with powerful analytics but limited results per month.</p>
                        <h3>$59</h3>
                        <p>/per month</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-4">
                <div className="card h-100">
                    <div className="card-body" id="loop">
                        <h2>MAX</h2>
                        <p>Full remote assessments potential unleashed. Test even more with generous monthly results
                            limit.</p>
                        <h3>$79</h3>
                        <p>/three month</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-4">
                <div className="card h-100">
                    <div className="card-body" id="loop">
                        <h2>MAX Customized</h2>
                        <p>The ultimate business plan. Utilize all features, additional users and collaboration options.
                        </p>
                        <h3>$99</h3>
                        <p>/year</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Price;