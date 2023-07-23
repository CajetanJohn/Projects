import React, {useState, useEffect, useRef } from "react";
import GetStartedButton from "../Components/GetStartedButton";
import UserReview from "../Components/UserReview";
import Gallery from "../Components/Gallery";
import Counters from "../Components/Counter";
import VideoPlayer from "../Components/VideoPlayer";
import { gsap } from "gsap";
import Guidelines from '../Components/Guidelines';
import Type from '../Components/Typing'



export function SectionOne() {
  const sectionRef = useRef(null);
  const detailingRef = useRef(null);
  const bottomSlideInRefs = useRef([]);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const detailing = detailingRef.current;
    const bottomSlideIns = bottomSlideInRefs.current;

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });

    tl.from(detailing, { opacity: 0, x: 400 })
      .from(bottomSlideIns, { opacity: 0, y: 150, stagger: 0.2 });

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationPlayed) {
          tl.play();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    observer.observe(section);

    return () => {
      observer.unobserve(section);
      tl.kill();
    };
  }, [animationPlayed]);

  const registerElementRef = (element) => {
    if (element && !bottomSlideInRefs.current.includes(element)) {
      bottomSlideInRefs.current.push(element);
    }
  };

  return (
    <section className="container-fluid page-section py-5" ref={sectionRef}>
      <div className="container-body d-flex flex-column flex-md-row">
        <div
          className={`summary col col-md-5 ${
            animationPlayed ? "played" : ""
          }`}
          ref={registerElementRef}
        >
          <h1><Type element={'h1'} text={'How assignment should be done'} delay={1400} interval={20}/></h1>
          <h6> <Type element={'h1'} text={'Forget the old rules. You can have the best people. Right now. Right here.'} delay={2400} interval={20}/></h6>
        </div>

        <div className="detailing col-12 col-md-6" ref={detailingRef}>
          <Gallery />
        </div>
      </div>

      <div
        className={`bottom-slide-in container-footer ${
          animationPlayed ? "played" : ""
        }`}
        ref={registerElementRef}
      >
        <div className="container-footer-overlay col-7 col-md-5">
          <GetStartedButton />
        </div>
      </div>
    </section>
  );
}


export function SectionTwo() {
  const sectionRef = useRef(null);
  const bottomFlowInRefs = useRef([]);

  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const bottomFlowIns = bottomFlowInRefs.current;

    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power1.out' } });

    tl.from(bottomFlowIns, { opacity: 0, y: 150, stagger: 0.2 });

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationPlayed) {
          tl.play();
          setAnimationPlayed(true);
          observer.unobserve(entry.target); // Stop observing once animation has played
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

    bottomFlowIns.forEach((element) => {
      observer.observe(element);
    });

    // Make sure to return a cleanup function that disconnects the observer when the component unmounts
    return () => {
      observer.disconnect();
      tl.kill();
    };
  }, [animationPlayed]);

  const registerElementRef = (element) => {
    if (element && !bottomFlowInRefs.current.includes(element)) {
      bottomFlowInRefs.current.push(element);
    }
  };


  return (
    <section className="container-fluid page-section" ref={sectionRef}>
      <div className="container-header text-center col bottom-slide-in">
        <h2 className="col">Why work with us?</h2>
      </div>
      <div className="container-body flex-column">
        <div className="summary col">
          {/*<RatingCard /> */}
        </div>
        <div className="bottom-flow-in detailing flex-column flex-md-row">
          <div className="item col-12 col-md-2" ref={registerElementRef}>
            <h6>Plagiarism free work</h6>
            <p>
              We utilize Tools to check papers for plagiarism three times: during writing, editing, and proofreading. To ensure you have submitted unique work.
            </p>
          </div>
          <div className="item col-12 col-md-2" ref={registerElementRef}>
            <h6>Affordable Prices</h6>
            <p>
              Our prices are structured in an economic way with the option to choose advanced features.
            </p>
          </div>
          <div className="item col-12 col-md-2" ref={registerElementRef}>
            <h6>On time delivery</h6>
            <p>
              We ensure you get that work right when you need it.
            </p>
          </div>
          <div className="item col-12 col-md-2" ref={registerElementRef}>
            <h6>24/7 Live help</h6>
            <p>
              Get help and feedback at the comfort of your time.
            </p>
          </div>
        </div>
      </div>
      <div className="container-footer"><Guidelines/> </div>
    </section>
  );
}


export function SectionThree() {
  const sectionRef = useRef(null);
  const bottomSlideInRef = useRef(null);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const bottomSlideIn = bottomSlideInRef.current;

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });

    tl.from(bottomSlideIn, { opacity: 0, y: 150 });

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationPlayed) {
          tl.play();
          setAnimationPlayed(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0});

    observer.observe(section);

    return () => {
      observer.disconnect();
      tl.kill();
    };
  }, [animationPlayed]);
  
  return (
    <section className="container-fluid" ref={sectionRef}>
      <div className="bottom-slide-in container-header flex-column flex-md-row text-start" ref={bottomSlideInRef}>
        <h2 className="col col-md-4"> Our excellence is guaranteed by experience over the years </h2>
        <h6> With live testimonials from some of our users, we guarantee you the best thesis and essay writing </h6>
      </div>
      <div className="container-body rating flex-column flex-md-row">
        <div className="stats col col-md-4 order-md-1"><Counters/></div>
        <div className="videoPlayer col order-md-2">
          <VideoPlayer/>
        </div>
      </div>
    </section>
  );
}
export function SectionFour() {
  const scrollList = useRef(null);
  const tl = useRef(null);

  const scrollLeft = () => {
    scrollList.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollList.current.scrollBy({
      left: +300,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const autoHorizontalScroll = scrollList.current;

    tl.current = gsap.timeline({ repeat: -1 });

    tl.current.to(autoHorizontalScroll, {
      scrollLeft: autoHorizontalScroll.scrollWidth - autoHorizontalScroll.clientWidth,
      duration: 10,
      ease: "none",
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.current.play();
          } else {
            tl.current.kill();
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(autoHorizontalScroll);

    return () => {
      observer.disconnect();
      tl.current.kill();
    };
  }, []);

  useEffect(() => {
    // Stop the animation halfway
    if (tl.current) {
      tl.current.progress(0.1).pause();
    }
  }, []);

  return (
    <section className="container-fluid">
      <div className="bottom-slide-in container-header flex-column flex-md-row text-center">
        <h2 className="col">What our customers say.</h2>
      </div>
      <div className="container-body scroll-container">
        <div ref={scrollList} className="scroll auto-horizontal-scroll">
          <div className="horizontal-scroll-bar col-12 m-auto">
            <UserReview />
          </div>
        </div>
        <div className="scroll-button">
          <button onClick={scrollLeft} type="button" className="scroll-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </button>
          <button onClick={scrollRight} type="button" className="scroll-button end-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="container-footer"></div>
    </section>
  );
}


function Homepage() {
  return (
    <>
      <div className="homepage"></div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
}

export default Homepage;
