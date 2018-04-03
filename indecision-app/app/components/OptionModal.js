import React, { Component } from "react";
import Modal from "react-modal";

export const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
    onRequestClose={props.handleClearSelectedOption}
  >
    <h3 className = "modal__title">Selected Option</h3>
    {props.selectedOption && <p className  ="modal__body">{props.selectedOption}</p>}
    <button 
      onClick={props.handleClearSelectedOption}
      className = "button" 
    >Okay</button>
  </Modal>
);
