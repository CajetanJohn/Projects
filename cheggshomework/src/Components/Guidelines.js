import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
 

const Guidelines = () => {
  const ContainerParentRef = useRef(null);

  useEffect(() => {
    const parentElement = ContainerParentRef.current;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Adjust the threshold value as needed (0 to 1)
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the animation when the element enters the viewport
          const tl = gsap.timeline();
          tl.from('.__heading', { opacity: 0, y: 100, duration: 1 });
          tl.from('.bottom-flow-in', { opacity: 0, y: 100, stagger: 0.2, duration: 0.8 }, '-=0.8');

          // Disconnect the observer after the animation starts
          observer.unobserve(parentElement);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (parentElement) {
      observer.observe(parentElement);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (parentElement) {
        observer.unobserve(parentElement);
      }
    };
  }, []);

  return (
    <>
      <div ref={ContainerParentRef} className="guideline-section p-3">
        <div className="  __heading __heading-container text-center">
          <h2 className="bottom-flow-in --heading">Online Educational Assistance</h2>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className=" bottom-flow-in guideline-item row d-flex flex-column justify-content-center align-items-center text-center ">
              <div className="col-lg-2 col-12">
                <div className="video-sprite video-sprite--icon1">
                  <img
                    width="90"
                    height="73"
                    alt="Tell us what you need"
                    src="https://cdn1.myassignmenthelp.com/revamp-assets-version2/page-elements/how-it-works-1.svg"
                    data-src="https://cdn1.myassignmenthelp.com/revamp-assets-version2/page-elements/how-it-works-1.svg"
                    className="loaded"
                    data-was-processed="true"
                  />
                </div>
              </div>
              <div className="col-lg-10 col-12">
                <h3>Tell us what you need</h3>
                <p>
                  Visit our website and provide all the details by filling up the order form. If you want customized{' '}
                  <b>assignment solutions</b>, you can preview our prioritization when filling up the form.
                </p>
              </div>
            </div>

            <div className="bottom-flow-in guideline-item row d-flex flex-column justify-content-center align-items-center text-center">
              <div className="col-lg-2 col-12">
                <div className="video-sprite video-sprite--icon2">
                  <img
                    width="90"
                    height="73"
                    alt="Pay for Assignment"
                    src="https://cdn1.myassignmenthelp.com/revamp-assets-version2/page-elements/how-it-works-2.svg"
                    data-src="https://cdn1.myassignmenthelp.com/revamp-assets-version2/page-elements/how-it-works-2.svg"
                    className="loaded"
                    data-was-processed="true"
                  />
                </div>
              </div>
              <div className="col-lg-10 col-12">
                <h3>Pay for assignment</h3>
                <p>
                  We prop you to pay 50% of the total price when submitting assignment. This is to secure ourselves and is refundable at a fee when frquested. We only accept paypal money transfers.
                </p>
              </div>
            </div>

            <div className="bottom-flow-in guideline-item row d-flex flex-column justify-content-center align-items-center text-center">
              <div className="col-lg-2 col-12">
                <div className="video-sprite video-sprite--icon3">
                  <img
                    width="90"
                    height="73"
                    alt="GET ASSIGNMENT SOLUTION"
                    src="https://cdn1.myassignmenthelp.com/revamp-assets-version2/page-elements/how-it-works-3.svg"
                    data-src="https://cdn1.myassignmenthelp.com/revamp-assets-version2/page-elements/how-it-works-3.svg"
                    className="loaded"
                    data-was-processed="true"
                  />
                </div>
              </div>
              <div className="col-lg-10 col-12">
                <h3>Receive completed solution</h3>
                <p>
                  Our <b>assignment help</b> experts start writing the papers as soon as the payment is done. The
                  writers work fast to complete the task within the deadline. You will receive your <b>assignment</b> in
                  your registered account prior to the submission deadline.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-flow-in other-get-started-button">
        <Link className="btn" to="/GetStarted">
          Order Now
        </Link>
      </div>
      </div>
      
    </>
  );
};

export default Guidelines;
