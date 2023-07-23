import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function PagenotFound(){
    const navigate = useNavigate();
    function goBack() { navigate(-1); }
    return(
        <section class="page_404">
          <div class="container-fluid">
            <div class="row">	
              <div class="col-sm-12 ">
                <div class="text-center">
                  <div class="four_zero_four_bg">
                    <h1 class="text-center ">404</h1>
                  </div>
                  <div class="contant_box_404">
                    <h3 class="h2"> Look like you're lost </h3>
                    <p>the page you are looking for not available!</p>
                    <button class="link_404" onClick={goBack}> Go back </button>
                    <Link className="link_404" to="./"> Home</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}