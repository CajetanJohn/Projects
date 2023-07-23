import { useEffect, useRef } from "react";
import gsap from "gsap";

const reviewsArray = [
    {
      review: "The essay I received was exceptional. It was well-researched, coherent, and delivered on time. The writer followed all my instructions and exceeded my expectations. Thank you!",
      name: "Jane Smith"
    },
    {
      review: "The quality of the essay surpassed my expectations. It was thoroughly researched, eloquently written, and delivered before the deadline. I highly recommend this service!",
      name: "John Doe"
    },
    {
      review: "I am extremely satisfied with the essay I received. The content was well-structured, the arguments were persuasive, and the overall writing style was impressive. Great job!",
      name: "Sarah Johnson"
    },
    {
      review: "I couldn't be happier with the exceptional essay I received. The writer demonstrated a deep understanding of the topic and presented it in a compelling manner. Thank you!",
      name: "Michael Anderson"
    },
    {
      review: "The essay exceeded my expectations in every aspect. It was meticulously researched, creatively written, and delivered well before the deadline. I'm impressed!",
      name: "Emily Wilson"
    },
    {
      review: "The quality of the essay was outstanding. It was evident that the writer put in a lot of effort and conducted thorough research. I will definitely use this service again!",
      name: "David Thompson"
    },
    {
      review: "I am thoroughly impressed with the essay I received. The writer covered all the key points and provided insightful analysis. I highly recommend their services!",
      name: "Sophia Roberts"
    },
    {
      review: "The essay was flawless and met all my requirements. The writer demonstrated exceptional writing skills and delivered a top-notch piece of work. Thank you!",
      name: "Matthew Davis"
    },
    {
      review: "I am extremely pleased with the essay. It was well-structured, logical, and supported by strong evidence. The writer did an excellent job. Highly recommended!",
      name: "Olivia Moore"
    },
    {
      review: "The essay I received was outstanding. It was evident that the writer paid attention to detail and conducted thorough research. I am grateful for their expertise!",
      name: "Daniel Wilson"
    },
    {
      review: "The quality of the essay was excellent. It was well-written, coherent, and delivered on time. The writer exceeded my expectations. Thank you so much!",
      name: "Emma Johnson"
    },
    {
      review: "I am extremely satisfied with the essay. The writer showcased a deep understanding of the topic and provided insightful analysis. I highly recommend their services!",
      name: "James Anderson"
    },
    {
      review: "The essay was exceptional. It demonstrated a strong command of the subject matter and presented well-reasoned arguments. I'm impressed with the writer's skills!",
      name: "Isabella Thompson"
    },
    {
      review: "I am thoroughly impressed with the essay I received. The writer delivered a high-quality, well-researched paper that exceeded my expectations. Highly recommended!",
      name: "Jacob Roberts"
    },
    {
      review: "The essay was flawless. It was evident that the writer invested time and effort into researching the topic. I am extremely pleased with the result. Thank you!",
      name: "Mia Davis"
    },
    {
      review: "I couldn't be happier with the essay I received. The writer covered all the necessary points and delivered a well-structured and engaging paper. Thank you so much!",
      name: "Alexander Wilson"
    },
    {
      review: "The quality of the essay was exceptional. It was evident that the writer had a deep understanding of the subject and conducted thorough research. Highly recommended!",
      name: "Charlotte Moore"
    },
    {
      review: "I am extremely impressed with the essay I received. The writer provided a comprehensive analysis and presented the information in a clear and concise manner. Great job!",
      name: "Benjamin Johnson"
    },
    {
      review: "The essay exceeded my expectations. It was well-written, well-researched, and showcased the writer's expertise in the subject matter. Thank you for your outstanding work!",
      name: "Samantha Anderson"
    },
    {
      review: "I am thoroughly satisfied with the essay. It was professionally written, properly formatted, and delivered on time. The writer did an excellent job. Thank you!",
      name: "Henry Thompson"
    },
    {
      review: "The essay I received was outstanding. The writer effectively addressed the topic, provided solid arguments, and supported them with credible sources. Highly recommended!",
      name: "Ava Roberts"
    },
    {
      review: "I couldn't be happier with the essay. The writer demonstrated a strong understanding of the subject and delivered a well-structured and compelling paper. Thank you!",
      name: "William Davis"
    },
    {
      review: "The quality of the essay was excellent. It was evident that the writer conducted thorough research and presented the information in a coherent and logical manner. Great job!",
      name: "Grace Wilson"
    },
    {
      review: "I am extremely pleased with the essay I received. The writer followed all my instructions and delivered a high-quality paper that met all my requirements. Thank you!",
      name: "Liam Thompson"
    },
    {
      review: "The essay was exceptional. The writer provided a unique perspective on the topic, supported by strong arguments and evidence. I'm impressed with their expertise!",
      name: "Ella Anderson"
    },
    {
      review: "I am thoroughly impressed with the essay. It was evident that the writer conducted extensive research and delivered a well-structured and insightful paper. Thank you!",
      name: "Noah Roberts"
    },
    {
      review: "The essay exceeded my expectations. The writer demonstrated a deep understanding of the subject matter and presented the information in a clear and concise manner. Great job!",
      name: "Chloe Davis"
    },
    {
      review: "I am extremely satisfied with the essay I received. The writer showcased excellent research skills and delivered a well-crafted and informative paper. Thank you!",
      name: "Sebastian Wilson"
    },
    {
      review: "The quality of the essay was outstanding. It was evident that the writer invested time and effort into conducting thorough research. Highly recommended!",
      name: "Scarlett Thompson"
    },
    {
      review: "I couldn't be happier with the essay. The writer provided a comprehensive analysis, supported by strong evidence, and delivered it on time. Thank you so much!",
      name: "Lucas Roberts"
    },
    {
      review: "The essay was exceptional. It was evident that the writer possessed extensive knowledge of the subject and presented it in a compelling and coherent manner. Thank you!",
      name: "Lily Anderson"
    },
    {
      review: "I am thoroughly impressed with the essay I received. The writer covered all the essential aspects of the topic and delivered a well-researched and engaging paper. Great job!",
      name: "Gabriel Davis"
    },
    {
      review: "The essay exceeded my expectations. It was well-structured, thoroughly researched, and showcased the writer's expertise in the subject matter. Highly recommended!",
      name: "Zoe Wilson"
    },
    {
      review: "I am extremely satisfied with the essay. The writer provided a detailed analysis and delivered a high-quality paper that met all my requirements. Thank you!",
      name: "Jackson Thompson"
    },
    {
      review: "The quality of the essay was excellent. It was evident that the writer had a deep understanding of the subject and delivered a well-argued and informative paper. Thank you!",
      name: "Penelope Roberts"
    },
    {
      review: "I couldn't be happier with the essay I received. The writer showcased excellent research skills and presented the information in a clear and concise manner. Thank you so much!",
      name: "Leo Davis"
    },
    {
      review: "The essay was outstanding. It demonstrated the writer's expertise in the subject matter and provided valuable insights. I am extremely pleased with their work. Thank you!",
      name: "Mila Wilson"
    },
    {
      review: "I am thoroughly impressed with the essay. The writer covered all the key points and delivered a well-structured and persuasive paper. I highly recommend their services!",
      name: "Ryan Thompson"
    },
    {
      review: "The essay exceeded my expectations. It was well-written, supported by strong evidence, and delivered on time. The writer did an excellent job. Thank you!",
      name: "Avery Roberts"
    },
    {
      review: "I am extremely satisfied with the essay I received. The writer demonstrated a deep understanding of the topic and provided a thorough analysis. Thank you for your expertise!",
      name: "Ethan Davis"
    },
    {
      review: "The quality of the essay was exceptional. It was evident that the writer conducted extensive research and delivered a well-structured and informative paper. Great job!",
      name: "Hannah Wilson"
    },
    {
      review: "I couldn't be happier with the essay. The writer provided a unique perspective, supported by strong arguments, and presented it in a captivating manner. Thank you!",
      name: "Logan Thompson"
    },
    {
      review: "The essay was exceptional. It showcased the writer's profound knowledge of the subject and provided insightful analysis. I'm impressed with their expertise. Thank you!",
      name: "Aria Anderson"
    },
    {
      review: "I am thoroughly impressed with the essay. The writer covered all the necessary points and delivered a well-structured and engaging paper. Thank you so much!",
      name: "Carter Roberts"
    },
    {
      review: "The essay exceeded my expectations. It was well-researched, eloquently written, and delivered before the deadline. I highly recommend this service!",
      name: "Evelyn Davis"
    },
    {
      review: "I am extremely satisfied with the essay I received. The content was well-structured, the arguments were persuasive, and the overall writing style was impressive. Great job!",
      name: "Mateo Wilson"
    }
  ];
  
  const Testimonial = () => {
    const testimonialContainerRef = useRef(null);
  
    useEffect(() => {
      const container = testimonialContainerRef.current;
      const testimonials = container.querySelectorAll(".testimonial");
  
      const tl = gsap.timeline({ paused: true });
      tl.from(testimonials, { opacity: 0, y: 50, stagger: 0.2 });
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              tl.play();
              observer.unobserve(entry.target); // Stop observing once animation has played
            }
          });
        },
        { threshold: 0.5 }
      );
  
      testimonials.forEach((testimonial) => {
        observer.observe(testimonial);
      });
  
      return () => {
        observer.disconnect();
        tl.kill();
      };
    }, []);
  
    return (
      <div className="testimonial-container" ref={testimonialContainerRef}>
        {reviewsArray.map((review, index) => (
          <div className="testimonial" key={index}>
            <p className="testimonial-quote">{review.review}</p>
            <p className="testimonial-author">- {review.name}</p>
          </div>
        ))}
      </div>
    );
  };
export default Testimonial;