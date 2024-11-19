import React from "react";
import about from "./images/about.webp";
function About(){
    return(
        <section id="about">
        <div className="container py-4 d-flex justify-content-center">
            <div className="row justify-content-center align-items-center" style={{backgroundColor:'rgba(0, 66, 69, 0.726)', borderRadius:'20px', boxShadow:'10px 10px 5px',width:'90%'}}>
                <div className="col-md-4">
                    <img src={about} className="img-fluid rounded" alt="About Us Image"></img>
                </div>
                <div className="col-md-5">
                    <h1 className="text-light text-center mb-4">About us</h1>
                    <h2 className="text-center mb-4">A few words about who we are and what drives us to act</h2>
                    <p className="text-center">Online Assessment is a groundbreaking, innovative online platform for competencies evaluations. But enough of the bragging, let the numbers speak for themselves. We make skills and knowledge assessments objective, insightful and actionable.</p>
                </div>
            </div>
        </div>
    
        <div className="container py-4">
            <div className="row justify-content-center" >
                <div className="col-md-8">
                    <h1 className="text-center mb-4">Our mission</h1>
                    <p className="">We created a revolutionary online knowledge and competencies assessment solution. It empowers thousands of organizations worldwide to grow by allowing them to get a broader picture and draw better conclusions with cutting-edge data analysis algorithms. But most of all, it allows them to fulfill their missions: to educate or do business without distractions.</p>
                </div>
            </div>
        </div>
    
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="text-center mb-4">Our vision</h1>
                    <p className="">What started as the passion project of just two people evolved into a top-ranked assessment tool that is trusted and valued by educational and business organizations worldwide.</p>
                    <p className="" >Today, Testportal is run by the best team in the world. It’s a results-driven mixture of capabilities, open minds, and continuous development. This group of professionals is dedicated to delivering only the highest-quality solutions. We’re focused, hard-working, and always there for you.</p>
                </div>
            </div>
        </div>
    </section>
    );
}
export default About;