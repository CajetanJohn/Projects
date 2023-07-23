import React, {useRef, useState, useEffect } from 'react';
import PaypalCheckoutButton from "./PaypalCheckout";
import SendToMail from "../Utils/sendToMail";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [error, seterrors] = useState({});
  const [timeOptions, setTimeOptions] = useState([]);
  const [currentPrice, setPrice] = useState(15);
  const [showFileList, setShowFileList] = useState(false); 
  const [totalFileSize, setTotalFileSize] = useState(0);
  const formCardRefs = useRef([]);
  const [review, showReview] = useState(false);
  const [paid, setPaid] = useState(false);
  const assignment_form = useRef(null)

  const subjects = ['Nursing','Psychology','Biochemistry','Human Resourse','English Literature','Economics','Business Management','Accounting','Statistics','Law','Physics','Mathematics','Computer Science' ]


  const [formValues, setFormValues] = useState({
    Subject: "",
    AcademicLevel: "PhD",
    Type_Of_Paper: "",
    Spacing: "Double (2)",
    Pages: 1,
    PaperFormat: "APA",
    Deadline: "",
    Date:"",
    Time:"",
    Description: "",
    Words: "280",
    Files: [],
    Name:"",
    Mail:"",
    Address:"",
    Price:currentPrice,
    Hour:""
  });

  useEffect(() => {
    let options = ['Longer'];
    for (let time = 168; time >= 12; time -= 12) {
      options.unshift(time);
    }
    setTimeOptions(options);
  }, []);

  useEffect(() => {
    setFormValues((prevValues) => ({
      ...prevValues,
      Price: (currentPrice * formValues.Pages) + ((formValues.Deadline < 96) ? formValues.Deadline * 8 / 24 : 0)
    }));
  }, [formValues.Pages, formValues.Deadline]);

  useEffect(() => {
    formCardRefs.current = formCardRefs.current.slice(0, currentStep);
  }, [currentStep]);
  
  
  const handleInputChange = (e) => {
    const currentStepInputs = Array.from(formCardRefs.current[currentStep - 1].querySelectorAll('[data-needed]'));
    const { name, value } = e.target;

    if (name === 'Deadline') {
      // Handle date and hour selection
      if (value === 'Longer') {
        seterrors({ ...error, Deadline: '' }); // Reset date and hour errors
        setFormValues({ ...formValues, Deadline: 'Longer' }); // Reset date and hour values
      } else {
        const currentDate = new Date().toISOString().split('T')[0]; // Get current date
        const selectedDate = value === currentDate ? '' : value; // If selected date is current date, set to empty string
        setFormValues({ ...formValues, Deadline: selectedDate }); // Combine date and hour in Deadline property
        seterrors({ ...error, Deadline: isDateInPast(value) ? 'Cannot select a past date' : '' }); // Validate date
      }
    } else if (name === 'Spacing') {
      const words = e.target.getAttribute('words');
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
        Words: words,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }

    const currentErrors = validateInputs(currentStepInputs);
    seterrors(currentErrors);
  };

  const isDateInPast = (date) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return new Date(date) < currentDate;
  };
  
  
  const validateInputs = (inputs) => {
    const errors = {};
    inputs.forEach((input) => {
      const { name, value } = input;
      if (!value) {
        errors[name] = " is required.";
      } else if (name === "Mail" && !isValidEmail(value)) {
        errors[name] = " is not a valid.";
      }
    });
    return errors;
  };
  
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  
  const getMinDate = () => { const currentDate = new Date(); currentDate.setDate(currentDate.getDate() + 7); // Add seven days to the current date
  return currentDate.toISOString().split('T')[0]; };
  


const handleNextStep = (event) => {
  event.preventDefault();
   if(currentStep === 3 ){
      return;
    }
  const currentStepInputs = Array.from(formCardRefs.current[currentStep - 1].querySelectorAll('[data-needed]')); 
  
  const currentErrors = validateInputs(currentStepInputs);
  
  if (Object.keys(currentErrors).length === 0) {
    setCurrentStep((prevStep) => prevStep + 1);
    seterrors({});
  } else {
    seterrors(currentErrors);
  }
};

const handleFileChange = (event) => {
  const files = Array.from(event.target.files);
  const totalSize = getTotalFileSize(files);

    if (totalSize > 10 * 1024 * 1024) {
      event.target.classList.add("invalid");
      return;
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      Files: prevValues.Files.concat(files)
    }));
    setTotalFileSize((prevSize) => prevSize + totalSize);
    event.target.classList.remove("invalid");
  };

  const getTotalFileSize = (files) => {
    let totalSize = 0;
    for (const file of files) {
      totalSize += file.size;
    }
    return totalSize;
  };

  const handleRemoveFile = (event,index) => {
    event.preventDefault();
    const removedFile = formValues.Files[index];
    const newTotalSize = totalFileSize - removedFile.size;

    setFormValues((prevValues) => ({
      ...prevValues,
      Files: prevValues.Files.filter((_, i) => i !== index)
    }));
    setTotalFileSize(newTotalSize);
  };

  const handleToggleFileList = () => {
    setShowFileList((prevState) => !prevState);
  };

  const formatFileSize = (size) => {
    if (size < 1024) {
      return size + " B";
    } else if (size < 1024 * 1024) {
      return (size / 1024).toFixed(2) + " KB";
    } else {
      return (size / (1024 * 1024)).toFixed(2) + " MB";
    }
  };
  
  const handleDecrement = (event) => {
    event.preventDefault();
    if (formValues.Pages > 0 && formValues.Pages <= 50) {
      setFormValues((prevValues) => ({
        ...prevValues,
        Pages: prevValues.Pages - 1
      }));
    }
    if (formValues.Pages > 50){
      setFormValues((prevValues) => ({
        ...prevValues,
        Pages: 50 - 1}))
    }
  };

  const handleIncrement = (event) => {
    event.preventDefault();
    if (formValues.Pages < 50) {
      setFormValues((prevValues) => ({
        ...prevValues,
        Pages: prevValues.Pages + 1
      }));
    }
  };
    
  const handlePreviousStep = (event) => {
    event.preventDefault();
    setCurrentStep((prevStep) => prevStep - 1);
  };
  
  const checkIfPaid = (alreadyPaid, feedback) => {
    setPaid(alreadyPaid);
  }


  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-card" ref={(el) => (formCardRefs.current[0] = el)}>
          <h5 className="form-step-title">Assignment details</h5>
            <div className="form-row">
              <div className="form-input-container">

                <select className="input" type="text" name="Subject" value={formValues.Subject} id="Subject" data-needed placeholder=" " onChange={handleInputChange}>
                  {
                    subjects.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))
                  }
                </select>
                <label className={`form-input-label ${error.Subject ? "error" : ""}`} htmlFor="Subject"> Subject{error.Subject}</label>
              </div>
              
              <div className="form-input-container radial-container">
                <div className="radial-input">
                  <input hidden className="input" type="radio" name="AcademicLevel" id="AcademicLevel_1" value="Undergraduate" onChange={handleInputChange}  />
                  <label className="radial-input-label" htmlFor="AcademicLevel_1"> Undergraduate </label>
                </div>
                <div className="radial-input">
                  <input hidden className="input" type="radio" name="AcademicLevel" id="AcademicLevel_2" value="Masters" onChange={handleInputChange} />
                  <label className="radial-input-label" htmlFor="AcademicLevel_2"> Masters </label>
                </div>
                <div className="radial-input">
                  <input hidden className="input" type="radio" name="AcademicLevel" id="AcademicLevel_3" value="PhD" defaultChecked onChange={handleInputChange} />
                  <label className="radial-input-label" htmlFor="AcademicLevel_3"> PhD</label>
                </div>
                <label className={`radial-label ${error.Academiclevel ? "error" : ""}`}> Academic Level  {error.Academiclevel} </label>
              </div>
            </div>
            <div className="form-row">
              <div className="form-input-container">
                <input className="input" type="text" name="Type_Of_Paper" id="typeOfPaper" data-needed placeholder=" " onChange={handleInputChange} value={formValues.Type_Of_Paper}/>
                <label className={`form-input-label ${error.Type_Of_Paper ? "error" : ""}`} htmlFor="typeOfPaper"> Type of paper  {error.Type_Of_Paper}</label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-input-container radial-container">
                <div className="radial-input">
                  <input hidden className="input" type="radio" name="Spacing" id="spacing_1" value="Single (1)" words="380" onChange={handleInputChange}/>
                  <label className="radial-input-label" htmlFor="spacing_1">Single (1) </label>
                </div>
                <div className="radial-input">
                  <input hidden className="input" type="radio" name="Spacing" id="spacing_2" words="330" value="One & Half (1.5)" onChange={handleInputChange} />
                  <label className="radial-input-label" htmlFor="spacing_2"> One & Half (1.5) </label>
                </div>
                
                <div className="radial-input">
                  <input hidden className="input" type="radio" name="Spacing" id="spacing_3" value="Double (2)" words="280" defaultChecked onChange={handleInputChange} />
                  <label className="radial-input-label" htmlFor="spacing_3"> Double (2) </label>
                </div>
                <label className={`radial-label ${error.Spacing ? "error" : ""}`}> Spacing {error.Spacing}  | Words / Page = {formValues.Words}</label>
              </div>
              
              <div className="form-input-container">
                <input className="input" type="number" id="numberInput" min="0" max="100" value={formValues.Pages} onChange={handleInputChange} name="Pages"/>
                <label className={`form-input-label ${error.Pages ? "error" : ""}`} id="resultContainer"> Pages {error.Pages} | Total words = {formValues.Pages * formValues.Words}</label>
                <div className="number-input-control">
                  <button onClick={(event)=>handleDecrement(event)}>-</button>
                  <button onClick={(event)=>handleIncrement(event)}>+</button>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-input-container radial-container">
                  <div className="radial-input">
                    <input hidden className="input" type="radio" name="PaperFormat" id="PaperFormat_1" value="APA" defaultChecked onChange={handleInputChange}/>
                    <label className="radial-input-label" htmlFor="PaperFormat_1"> APA </label>
                  </div>
                  <div className="radial-input">
                    <input hidden className="input" type="radio" name="PaperFormat" id="PaperFormat_2" value="MLA" onChange={handleInputChange} />
                    <label className="radial-input-label" htmlFor="PaperFormat_2"> MLA </label>
                  </div>
                  <div className="radial-input">
                    <input hidden className="input" type="radio" name="PaperFormat" id="PaperFormat_3" value="Havard" onChange={handleInputChange} defaultChecked/>
                    <label className="radial-input-label" htmlFor="PaperFormat_3"> Havard </label>
                  </div>
                  <div className="radial-input">
                    <input hidden className="input" type="radio" name="PaperFormat" id="PaperFormat_4" value="Chicago" onChange={handleInputChange} />
                    <label className="radial-input-label" htmlFor="PaperFormat_4"> Chicago </label>
                  </div>
                  
                  <div className="radial-input">
                    <input hidden className="input" type="radio" name="PaperFormat" id="PaperFormat_5" value="Others" onChange={handleInputChange} />
                    <label className="radial-input-label" htmlFor="PaperFormat_5"> Others </label>
                  </div>
                  <label className={`radial-label ${error.PaperFormat ? "error" : ""}`}> Paper Format{error.PaperFormat} </label>
                </div>
              </div>

                <div className="form-row">
                  <div className="form-input-container custom-date-input">
                  <select className="input" name="Deadline" id="customDateInput" data-needed onChange={handleInputChange} value={formValues.Deadline} > <TimeOptions />
                  </select>
                  <label className={`radial-label ${error.Deadline ? 'error' : ''}`}> {formValues.Deadline === 'Longer' ? 'Enter exact Date' : 'Deadline (NB: urgent deadlines will affect pricing)'} {error.Deadline}
                  </label>
                  {formValues.Deadline === 'Longer' && (
                  <input className={`input ${error.Date ? 'error' : ''}`} type="date" name="Date" id="timeSelection" data-needed onChange={handleInputChange} value={formValues.Date} min={getMinDate()}/> )}
                  {formValues.Deadline === 'Longer' && ( <select className="input" name="Hour" id="hourSelection" onChange={handleInputChange} value={formValues.Hour} > {Array.from({ length: 48 }).map((_, index) => { const hour = Math.floor(index / 2); const minutes = index % 2 === 0 ? '00' : '30';
                return (
                  <option key={index} value={`${hour.toString().padStart(2, '0')}:${minutes}`}>
                    {`${hour.toString().padStart(2, '0')}:${minutes}`}
                  </option>
                );
              })}
            </select>
          )}
        </div>
      </div>
            <div className="form-row">
              <div className="form-input-container">
                <textarea className="textarea-input" value={formValues.Description} name="Description" placeholder=" " onChange={handleInputChange}></textarea>
                <label className={`textarea-input-label ${error.Description ? "error" : ""}`} htmlFor="password"> Description  {error.Description}</label>
                
                <div className="form-input-container file-upload-container">
                  <input className="input" hidden type="file" name="files" id="files_upload" multiple onChange={handleFileChange} /> 
                  <label className="file-input-label" htmlFor="files_upload">Upload files here (max:10mb)</label>
                  {formValues.Files.length > 0 && (
                    <span onClick={(event)=>handleToggleFileList(event)}> {formValues.Files.length}
                       attached
                    </span> )}
                </div>
              </div>
              
              { showFileList && formValues.Files.length > 0 && (
              <div className="uploaded-files-list">
                <span>Uploaded Files: </span>
                <ul> {formValues.Files.map((file, index) => ( <li key={index}> {file.name} ({formatFileSize(file.size)})
                    <button onClick={(event) => handleRemoveFile(event,index)}> X </button>
                      </li> ))}
                </ul>
                <button className="file-display-close-button" onClick={(event)=>{handleToggleFileList(event)}}> Close </button>
              </div> )}
            </div>
          </div>
  );
  case 2:
    return (
      <div className="form-card" ref={(el) => (formCardRefs.current[1] = el)}>
        <h3 className="form-step-title">Contact details</h3>
        
        <div className="form-row">
          <div className="form-input-container">
            <input className="input" type="text" name="Name" id="Name" data-needed
              value={formValues.Name}
                    placeholder=" " onChange={handleInputChange}
                  />
              <label htmlFor="Name" className={`form-input-label ${error.Name ? "error" : ""}`}> Name  {error.Name}</label>
          </div>
        </div>
        
        <div className="form-row">
         <div className="form-input-container">
            <input className="input" type="email" name="Mail" id="mail" value={formValues.Mail} data-needed placeholder=" " onChange={handleInputChange} />
            <label className={`form-input-label ${error.Mail ? "error" : ""}`} htmlFor="mail"> E-mail {error.Mail}</label>
          </div>
        </div>
        
        <div className="form-row">
        <div className="form-input-container">
            <input className="input" type="number" name="Phone" id="Phone" value={formValues.Phone} placeholder=" " onChange={handleInputChange} />
            <label className={`form-input-label ${error.Phone ? "error" : ""}`} htmlFor="Phone"> Phone Number {error.Phone}</label>
          </div>
          <div className="form-input-container">
            <input className="input" type="text" name="Address" id="Address" placeholder=" " value= {formValues.Address} onChange={handleInputChange} />
            <label className={`form-input-label ${error.Address ? "error" : ""}`} htmlFor="Address"> Address {error.Address}</label>
          </div>
        </div>
      </div>
  );
  case 3:
    return (
      <div className="form-card" ref={(el) => (formCardRefs.current[3] = el)}>
        <div className="paypal-payment-container">
          <h6 className="form-step-title">Confirm down-payment to continue</h6>
          <p>As per our policy, you are expected to pay 50% of the total cost <span className="price-review"> {formValues.Price/2} $ </span> <br />
          </p>
          {review && 
            (
            <div className="checkOut-list">
            { Object.keys(formValues).map((key, index) => (<> <span key={index}> {key.replace(/_/g, ' ')}: {formValues[key]} </span> <br /> </> 
            ))}
          </div>
            ) }
          <PaypalCheckoutButton submit={checkIfPaid} amount={formValues.Price}/>
        </div>
      </div>
      );
      default:return null;
    };
  }
          
  const TimeOptions = () => {
  return timeOptions.map((option, index) => {
    if (option === 'Longer') {
      return <option key={index} value={option}>Longer</option>;
    } else {
      const days = Math.floor(option / 24);
      const hours = option % 24;
      const dayString = days > 0 ? `${days} Day${days > 1 ? 's' : ''}` : '';
      const hourString = hours > 0 ? `${hours} Hrs` : '';
      const urgentString = option < 72 ? ' (urgent)' : '';
      return (
        <option key={index} value={option}>
          {dayString}{dayString && hourString ? ' ' : ''}{hourString}{urgentString}
        </option>
      );
    }
  });
};

  
  return (
    <form ref={assignment_form} data-multi-step className="multi-step-form">
        <div className="displayed-step">
          {renderFormStep()}
          <div className="work-price-indicator">
            <span> Total Cost :{' '} <span className="price">{formValues.Price} $</span> | affected by{' '} {`${formValues.Pages !== '' ? 'Pages' : ''}`} {`${(formValues.Deadline !== '' ) ? ' and the Deadline'  : ''}`} {`${formValues.Time !== '' ? 'Deadline' : formValues.Time}`} </span>
          </div>
          <div className="form-control-buttons">
            {currentStep > 1 && (
              <button type="button" onClick={(event)=>handlePreviousStep(event)}>Previous</button> )}
              {currentStep < 3 ?
              ( <button type="button" onClick={(event)=>handleNextStep(event)} data-next> Continue </button>
              ) : <SendToMail template="Assignment" data={formValues} disabled={!paid}/>}
          </div>
        </div>
      </form>
    );
};

export default MultiStepForm;