import React from 'react';
import ContactForm from '../Components/ContactForm'; 


const About = () => {
  return (
    <section className="container-fluid about-us">
       <div className="article">
    <h4>Leading the Way in Academic Assistance</h4>
    <p>
      Join the leading platform for academic success, where excellence, innovation, and student triumph are celebrated. Our vision is to create a supportive environment that fuels your academic growth and empowers you to achieve your goals.
    </p>
  </div>

  <div className="article">
    <h4>Our Commitment to Your Success</h4>
    <p>
      Our objectives are clear:
      <ul>
        <li>Receive personalized homework solutions tailored to your needs.</li>
        <li>Experience accurate and timely assistance for guaranteed academic success.</li>
        <li>Develop critical thinking and independent learning skills.</li>
        <li>Join a collaborative and inclusive community of ambitious learners.</li>
      </ul>
    </p>
  </div>

  <div className="article">
    <h4>Your Path to Excellence</h4>
    <p>
      Unlock your true potential with our goals in mind:
      <ul>
        <li>Improve your understanding and mastery of subjects.</li>
        <li>Elevate your academic performance and grades.</li>
        <li>Cultivate confidence and self-reliance in your abilities.</li>
        <li>Manage deadlines and conquer your workload.</li>
      </ul>
    </p>
  </div>

  <div className="article">
    <h4>Comprehensive Services Tailored to You</h4>
    <p>
      Explore our comprehensive range of services designed to propel your academic journey:
      <ul>
        <li>Receive personalized homework assistance and expert problem-solving.</li>
        <li>Elevate your essays and research papers with professional writing support.</li>
        <li>Refine your work with meticulous proofreading and editing.</li>
        <li>Unlock your potential with personalized cheggshomeworking and mentoring sessions.</li>
        <li>Conquer exams with our expert exam preparation guidance.</li>
      </ul>
    </p>
  </div>

  <div className="article">
    <h4>Contact Us Today</h4>
    <p>
      Have questions or ready to get started? Reach out to us using the contact form below. Our dedicated team is eager to assist you in achieving your academic goals.
    </p>
  </div>
   <ContactForm/>
    </section>
  );
};

export default About;
