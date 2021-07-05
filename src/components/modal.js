import React from "react";
import Modal from "react-modal";
import "../styles/modal.css";
import ForecastDetails from "./forecast-details";

const ReactModal = ({ forecast, openModal, closeModal }) => {
  Modal.setAppElement("body");
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "transparent",
          fontFamily: "Balsamiq Sans, cursive",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          textAlign: "center",
          border: "3px solid rgb(53, 51, 51)",
          borderRadius: "20px",
          position: "relative",
          padding: "50px",
          left: "4px",
          bottom: "0px",
          right: "0px",
        },
      }}
    >
      <ForecastDetails forecast={forecast} />
    </Modal>
  );
};

export default ReactModal;
