import React from 'react';
import {FaQs} from '../Components/FaQs';
import ContactForm from '../Components/ContactForm';
import Testimonial from '../Components/Testimonial';

const subjects = [
  'Nursing',
  'Psychology',
  'Biochemistry',
  'Human Resource',
  'English Literature',
  'Economics',
  'Business Management',
  'Accounting',
  'Statistics',
  'Law',
  'Physics',
  'Mathematics',
  'Computer Science',
];

const Service = () => {
  return (
    <div className="service-page">
      <section className="section">
        <h2 className="title">Our Services</h2>
        <p className="description">
          We provide high-quality academic writing services for students at the PhD, undergraduate, and postgraduate levels. Our team of experienced writers specializes in various subjects, ensuring that we can assist you in your academic journey.
        </p>
      </section>

      <section className="service-section">
        <h2 className="subtitle">Subjects We Cover</h2>
        <ul className="subject-list ">
          {subjects.map((subject, index) => (
            <li key={index} className="subject-item">{subject}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="subtitle">Our Approach</h2>
        <p className="description">
          At our company, we understand that each student has unique academic needs. That's why we take a personalized approach to deliver tailored solutions. Our writers work closely with you to understand your requirements and provide customized assistance.
        </p>
        <p className="description">
          We emphasize thorough research, original content creation, and adherence to academic standards. Our team stays updated with the latest developments in each field, ensuring the accuracy and relevance of the materials we deliver.
        </p>
      </section>

      {/* Additional Sections */}
      <section className="section">
        <h2 className="subtitle">Testimonials</h2>
        <Testimonial/>
      </section>

      <section className="section">
        <FaQs/>
      </section>
    </div>
  );
};

export default Service;
