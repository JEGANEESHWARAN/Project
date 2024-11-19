import React from "react";
import create from "./images/create.svg";
import access from "./images/access.svg";
import insghts from "./images/insghts.svg";
function Mid(){
    return(
        <section className="container-fluid  d-flex justify-content-center text-center py-5 " id="cre">
        <div className="row ml-3 " style={{width:'85%'}}>
            <div className="col-md-4 pt-3 " id="loop1">
                <div className="card h-100">
                    <div className="card-body ">
                        <img src={create} alt="" className="img-fluid mb-3"></img>
                        <h2>Create a test</h2>
                        <p>Build online tests in minutes with an intuitive and easy-to-use question manager. Choose the
                            most suitable question types, set your test timers, activity period and invite candidates or
                            employees with just a few clicks.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4  pt-3">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={access} alt="" className="img-fluid mb-3"></img>
                        <h2>Give access</h2>
                        <p>Experience full control over who takes your tests and when they do it. Share your tests with
                            employees or candidates. No need to create user accounts to take tests makes this test maker
                            tool perfect for secure pre & post-employment knowledge testing.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 pt-3 mr-2">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={insghts}alt="" className="img-fluid mb-3"></img>

                        <h2>Get insights</h2>
                        <p>Access real-time results during your tests and a wealth of detailed, actionable data about
                            your candidates' or employees' knowledge right after the tests are finished. Measure the
                            training impact.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Mid;