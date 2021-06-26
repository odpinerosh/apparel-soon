import React, { useState } from "react";
import "./EmailField.css";
import IconArrow from '../images/icon-arrow.svg';
import IconError from '../images/icon-error.svg'

const EmailField = () => {
  
  const [enteredMail, setEnteredMail] = useState("");

  const funValidar = (el) => {
    if (el === "" || !funTestMail(el)) {
      console.log("funValidar dice False");
      return false;
    } else return true;
  };

  const funTestMail = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[a-z]{2,5}$/.test(mail);
  };

  const clickHandler = (ev) => {
    const txtMail = document.getElementById("mail-form");
    const txtInfError = document.getElementById("inf-error");
    const imgMailError = document.getElementById("btn-error");

    ev.preventDefault();

    if(!funValidar(enteredMail)) {
      txtMail.classList.add("input-control-err");
      txtInfError.classList.add("mail-error-visible");
      imgMailError.classList.add("mail-error-visible");
    } else {
      txtMail.classList.remove("input-control-err");
      txtInfError.classList.remove("mail-error-visible");
      imgMailError.classList.remove("mail-error-visible");
    }
  };

  const textChangeHandler = (ev) => {
    ev.target.classList.remove("input-control-err");
    setEnteredMail(ev.target.value);
  };

  return (
    <div className="form-div">
        <form className="form-elements" id="mail-form">
          <input
            onChange={textChangeHandler}
            type="email"
            name="e-mail"
            id="txtMail"
            aria-label="Email Address"
            placeholder="Email"
            className="input-control"
          ></input>
          <img className="btn-error" id="btn-error" src={IconError} alt=""></img>
          <button
            onClick={clickHandler}
            name="element content"
            type="submit"
            className="button-control"
            id="btnSubmit"
          >
            <img className="btn-img" src={IconArrow} alt=""></img>
          </button>
        </form>
        <p className="mail-error" id="inf-error">Please provide a valid email</p>          
    </div>
  );
};

export default EmailField;
