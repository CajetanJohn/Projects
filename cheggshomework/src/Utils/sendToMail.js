import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {emailjs_key, emailjs_service_id} from "./API"; 
import Notification from './Notification'

const SendToMail = ({template, data, disabled}) => {
  const [status, setStatus] = useState("idle"); // "idle", "loading", "sent", "not sent"
  const [isSent, setIsSent] = useState(false);

  let templateParams;
  if (template === "Assignment") {
    templateParams = {
      Sender: {
        Name: data.Name,
        Mail: data.Mail,
        Phone: data.Phone,
        Address: data.Address,
      },
      Subject: `${data.Price} ${data.AcademicLevel} ${data.Type_Of_Paper} work, to be submitted by: ${data.Deadline} at ${data.Time}`,
      Body: `hello, please get the work below done.
      ${data.Description} \n
      Amount: ${data.Price} $
      Topic: ${data.Subject}
      Academic Level: ${data.AcademicLevel}
      Type of Paper: ${data.Type_Of_Paper}
      Deadline: ${data.Deadline} ${data.Time}
      Total Words Needed: ${data.Words}
      Total pages needed: ${data.Pages}
      Word Spacing: ${data.Spacing}
      Attachments: ${data.Files}
    `,
    };
  } else if (template === "Contact") {
    templateParams = {
      Sender: {
        Name: data.Name,
        Mail: data.Mail,
        Phone: data.Phone,
      },
      Subject: `${data.Subject} ${data.Subject_Other}`,
      Body: `hello, I want to reach out to you about
      ${data.Message} \n
      Attachments: ${data.Files}
    `,
    };
  }
  
  
  useEffect(() => {
    if (status === "loading") {
      emailjs
        .send(emailjs_service_id, template, templateParams, emailjs_key)
        .then((result) => {
          setStatus("Mail has been delivered");
          setIsSent(true);
        })
        .catch((error) => {
          setStatus("Mail has not been delivered!");
          
        });
    }
  }, [status, template]);
  
  function sendEmail() {
    setStatus("loading");
  }

  function handlePreviousClick() {
  }

  return (
    <>
    {isSent ? ( 
      <span className="ms-auto button-text delivered">{status}</span>
    ) : (
      <button data-submit onClick={sendEmail} type="button" className={` send-button ${status === "loading" ? "loading" : ""}`} disabled={disabled}> <span className="button-text"> {status === "loading" ? "" : "Mail to us"}</span> </button>
      )}
    </>
  );
};

export default SendToMail;
