import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const TempChange = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Button style={{ width: "30%", margin: "auto" }}>Celcius</Button>
          <Button style={{ width: "30%", margin: "auto" }}>Farenheight</Button>
          <Button style={{ width: "30%", margin: "auto" }}>Kelvin</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
