import React from "react";
import step1 from "../Assets/step.jpeg";
import test from "../Assets/step.jpeg";
import { FaQs } from "../Components/FaQs";
import { Link } from "react-router-dom";

const SiteAssistance = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="container-header p-2 text-left flex-column flex-md-row">
          <h4 className="header col">
            Simple guide to get you started
          </h4>
          <template>
            {" "}
            <div className="header-paragraph my-2 col col-md-7">
              <p className="">
                The modern labor market dictates its own terms. Today, to be a
                competitive specialist requires more than professional skills.
              </p>
            </div>
          </template>
        </div>

        <div >
          <ol className="follow-steps">
            <li>
              <img className="order-0" srcSet={`${step1} 600w `} sizes="(max-width: 600px) 480px, 800px" src={test} alt="talents"/>
              <div className="follow-step-explanation">
                <h3>1</h3>
                <p><strong>Start off by choosing the subject desired</strong></p>
                <p>start in the <Link to="/"> Homepage</Link> and enter in the seach bar your subject of choice, type "All" to view the subjects we tackle{" "}</p>             
              </div>
            </li>

            <li>
              <img className="order-1" srcSet={`${step1} 600w `} sizes="(max-width: 600px) 480px, 800px" src={test} alt="talents"/>
              <div className="follow-step-explanation">
                <h3>2</h3>
                <p><strong>Enter the course work details in the assignment form</strong></p>
                <p>This is done on the <Link to="/"> Assignment page</Link>, a form is provided for that</p>
                <p></p>           

              </div>
            </li>

            <li>
              <img className="order-0" srcSet={`${step1} 600w `} sizes="(max-width: 600px) 480px, 800px" src={test} alt="talents"/>
              <div className="follow-step-explanation">
                <h3>3</h3>
                <p><strong>Chill for us to tackle it and we will get in touch via mail, or phone number if you up for a conversation</strong></p>
                <p>So dont forget to input your mail and phonenumber at the end of the form</p>           
                <p>For any question inquiries, feel free to hit us up and we will get back to you</p>           
              </div>
            </li>

          </ol>
          
          <div className="col col-md-6 d-flex justify-content-center m-3 ">
            <Link className="get-started-button " to="/services">Get started right here</Link>
          </div>
        </div>

      </section>
      <FaQs/>
    </>
  );
};

export default SiteAssistance;

export function TellUsWhatYouNeed(){
  return(
    <>
    <section className=" ">
        <div>
          <h3>Tell Us What You Need</h3>
          <p>
            Visit our website and provide all the details by filling up the
            order form. If you want customized assignment solutions, you can
            talk to our support team and mention your requirements.
          </p>
        </div>
        <div>
          <h3>Pay For Assignment</h3>
          <p>
            Once you receive your quote, process your secure transaction through
            credit cards, debit cards and bank transfers in an instant. Payments
            are fast, easy and secure with many options provided like apple pay,
            google pay, visa, mastercard, discover, american express, alipay and
            many more.
          </p>
        </div>
        <div>
          <h3>Receive Completed Solution</h3>
          <p>
            Our assignment help experts start writing the papers as soon as the
            payment is done. The writers work fast to complete the task within
            the deadline. You will receive your assignment in your registered
            account prior to the submission deadline.
          </p>
        </div>
      </section>
    </>
  )
}