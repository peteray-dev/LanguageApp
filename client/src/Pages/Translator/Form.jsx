import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";

export default function Forms() {
  const [characterCount, setCharacterCount] = useState();
  return (
    <div>
      <Form className="row formtext inputWithIcon">
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={14}
            onChange={(e) => setCharacterCount(e.target.value.length)}
          />
          <div className="ico d-flex me-4 justify-content-between">
            <span id="microphone">
              <i className="iconx">
                <FaMicrophoneAlt />
              </i>
            </span>
            <span id="pencil">
              <p className="iconx">
                <RiPencilLine />
                {characterCount}
              </p>
            </span>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}
