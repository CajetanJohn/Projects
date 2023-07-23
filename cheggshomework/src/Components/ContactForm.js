import React, { useState } from "react";
import SendToMail from "../Utils/sendToMail";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Mail: "",
    Subject: "",
    Phone: "",
    Message: "",
    Subject_Other: "",
    Files: [],
  });

  const Subject = [
    "Why do you want to reach us?",
    "Assignment Help",
    "Technical Issue",
    "Payment Inquiry",
    "Refund Request",
    "Feedback or Suggestions",
    "Other",
  ];

  const maxMessageCharacter = 100;

  const [error, setError] = useState({
    Name: "",
    Mail: "",
    Subject: "",
    Issue: "",
    Message: "",
    Subject_Other: "",
    Phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "Mail") {
      const mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.match(mailPattern)) {
        setError((prevError) => ({
          ...prevError,
          Mail: "Invalid email address",
        }));
      } else {
        setError((prevError) => ({
          ...prevError,
          Mail: "",
        }));
      }
    }

    const needed = e.target.getAttribute("data-needed");
    if (needed) {
      if (!value.trim()) {
        setError((prevError) => ({
          ...prevError,
          [name]: "This field is required",
        }));
      } else {
        setError((prevError) => ({
          ...prevError,
          [name]: "",
        }));
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    if (formData.Files.length > 2) {
      event.target.classList.add("invalid");
      return;
    }

    setFormData((prevValues) => ({
      ...prevValues,
      Files: prevValues.Files.concat(files),
    }));
    event.target.classList.remove("invalid");
  };

  const handleRemoveFile = (event, index) => {
    event.preventDefault();
    const removedFile = formData.Files[index];

    setFormData((prevValues) => ({
      ...prevValues,
      Files: prevValues.Files.filter((_, i) => i !== index),
    }));
  };

  const reset = (event) => {
    event.preventDefault();
    setFormData((prevValues) => ({
      ...prevValues,
      Subject: "",
    }));
  };

  const template = formData.Subject === "Other" ? "Contact" : formData.Subject;

  const data =
    formData.Subject === "Other"
      ? { ...formData, Subject: formData.Subject_Other }
      : formData;

  const isDisabled = Object.values(error).some(
    (errorMsg) => errorMsg || formData.Mail === ""
  );

  return (
    <form className="contact-form-displayed">
    <div className="col-11 displayed-step" >
       <h6 className="form-step-title">Contact us</h6>
       <div className="form-row">
          <div className="form-input-container">
            <select className="input" name="Subject" id="Subject" onChange={handleInputChange} value={formData.Subject}>
                {Subject.map((issue, index) => ( <option key={index} value={issue}> {issue} </option> ))}
            </select>
            <label className={`form-input-label ${error.Subject ? "error" : ""}`}> Subject {error.Subject}</label>
          </div>          
        </div>

        
           { formData.Subject === "Other" && 
            <div className="form-row">
              <div className="form-input-container">
                <input className="input" type="text" id="Subject_Other" data-needed min="" value={formData.Subject_Other} onChange={handleInputChange} name="Subject_Other"/>
                <label className={`form-input-label ${error.Subject_Other ? "error" : ""}`}> Write about it here {error.Subject_Other}</label>
              </div>
            </div> 
          }

          <div className="form-row">
          <div className="form-input-container">
            <input className="input" type="text" id="Name" data-needed min="" value={formData.Name} onChange={handleInputChange} name="Name"/>
            <label className={`form-input-label ${error.Name ? "error" : ""} `}> Name {error.Name}</label>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-input-container">
            <input className="input" type="mail" id="Mail" data-needed min="" value={formData.Mail} onChange={handleInputChange} name="Mail"/>
            <label className={`form-input-label ${error.Mail ? "error" : ""}`}> Mail {error.Mail}</label>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-input-container">
            <input className="input" type="number" id="Phone" min="" value={formData.Phone} onChange={handleInputChange} name="Phone"/>
            <label className={`form-input-label ${error.Phone ? "error" : ""} `}> Phone {error.Phone}</label>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-input-container">
            <textarea className="textarea-input" value={formData.Message} data-needed name="Message" placeholder=" " onChange={handleInputChange} maxlength={maxMessageCharacter} ></textarea>
            <label className={`textarea-input-label ${error.Description ? "error" : ""}`} htmlFor="Message"> Message | char: {maxMessageCharacter - formData.Message.length} {error.Message}</label>
          { (formData.Subject === "Payment Inquiry" || formData.Subject === "Refund Request") &&  
            <div className="form-input-container file-upload-container">
              <input className="input" hidden type="file" name="files" id="files_upload" multiple onChange={handleFileChange} /> 
              {
                !formData.Files.length ? 
                  (<label className={`file-input-label ${error.Files ? "error" : ""}`} htmlFor="files_upload"> Upload any evidence of the above here
                  </label>)
                  :
                  (
                  <div className="evidence-diplayed-div">
                  <label className={`file-input-label ${error.Files ? "error" : ""}`} htmlFor="files_upload">
                  { formData.files.length > 2 ? 'only two files are to be uploaded'
                  : 
                    `${formData.Files.length} file uploaded | `
                  }</label>
                    <span className="">
                      { formData.Files.map((file, index) => (
                      <span key={index} onClick={(event) => handleRemoveFile(event,index)}> {file.name}
                      </span> ))
                      }
                      </span></div>
                    )
              }
            </div>
          }
          </div>
        </div>
      <div className="form-control-buttons">
        <SendToMail template='Contact' data={data} disabled={isDisabled} />
      </div>
      </div>
    </form>
  );
};

export default ContactForm;
