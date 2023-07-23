import { useState } from "react";
export function FaQs() {

    const [activeIndex, setActiveIndex] = useState(-1);
    
    const faqData = [
{
question: "What services do you offer for students?",
answer: "We offer homework and writing services for students in various subjects and academic levels."
},
{
question: "How can I place an order for a homework assignment?",
answer: "To place an order, simply visit our website and fill out the order form with all the necessary details."
},
{
question: "Are your services confidential?",
answer: "Yes, we prioritize the confidentiality of our clients. Your personal information and the details of your orders are kept secure."
},
{
question: "Can I choose a specific writer for my assignment?",
answer: "Yes, we provide an option to select a preferred writer based on their expertise and previous work."
},
{
question: "How do I communicate with the assigned writer?",
answer: "Once your order is confirmed, you can communicate directly with the assigned writer through our messaging system on the website."
},
{
question: "What if I'm not satisfied with the completed assignment?",
answer: "We offer revisions to ensure customer satisfaction. If you're not satisfied, you can request revisions within a specified timeframe."
},
{
question: "Are your writers qualified and experienced?",
answer: "Yes, we have a team of highly qualified and experienced writers who are experts in their respective fields."
},
{
question: "How do you ensure the originality of the content?",
answer: "We have strict plagiarism policies, and our writers create every assignment from scratch, ensuring original and unique content."
},
{
question: "What is the turnaround time for completing an assignment?",
answer: "The turnaround time depends on the complexity and length of the assignment. We strive to deliver within the agreed-upon deadline."
},
{
question: "Can I request a rush delivery for urgent assignments?",
answer: "Yes, we offer rush delivery options for urgent assignments. Additional charges may apply."
},
{
question: "What payment methods do you accept?",
answer: "We accept major credit cards, debit cards, and online payment methods like PayPal."
},
{
question: "Is there any refund policy if I'm not satisfied?",
answer: "Yes, we have a refund policy in place. Please refer to our terms and conditions for detailed information."
},
{
question: "Do you offer any discounts or promotional offers?",
answer: "Yes, we periodically offer discounts and promotional offers. Stay updated by subscribing to our newsletter or following us on social media."
},
{
question: "Can I track the progress of my assignment?",
answer: "Yes, you can track the progress of your assignment by logging into your account on our website."
},
{
question: "What subjects and academic levels do you cover?",
answer: "We cover a wide range of subjects, including math, science, literature, history, and more, across various academic levels from high school to university."
},
{
question: "Are your services available internationally?",
answer: "Yes, we offer our services to students worldwide. It doesn't matter which country you're from; you can avail of our services."
},
{
question: "Can I contact customer support if I have any queries?",
answer: "Absolutely! Our customer support team is available 24/7 to assist you with any queries or concerns you may have."
},
{
question: "Do you guarantee on-time delivery of assignments?",
answer: "Yes, we strive to deliver all assignments within the agreed-upon deadline, ensuring on-time delivery."
},
{
question: "What formatting styles do you follow for academic papers?",
answer: "Our writers are well-versed in various formatting styles, including APA, MLA, Chicago, Harvard, and more. You can specify your preferred style while placing an order."
},
{
question: "Is it legal to use your services for academic assistance?",
answer: "Yes, our services are designed to provide academic assistance and guidance. However, it's important to use the provided materials responsibly and adhere to your institution's guidelines."
}
    ];
  
    const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? -1 : index);
    };
  
    return (
      <section className="container-fluid">
        <h3 className="faq-heading">FAQ'S</h3>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>
              <p
                className={`faq-page px-1 py-2 px-md-4 ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <strong>{faq.question}</strong>
              </p>
              <div
                className={`faq-body px-2 py-1 px-md-5 ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  