import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import "./Form.css";

export default function Forms() {
  const [characterCount, setCharacterCount] = useState();
  return (
    <div>
      <Form className="formtext inputWithIcon">
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={15}
            onChange={(e) => setCharacterCount(e.target.value.length)}
          />
          <span id="microphone">
            <a className="iconx">
              <FaMicrophoneAlt />
            </a>
          </span>
          <span id="pencil">
            <p className="iconx">
              <RiPencilLine />
              {characterCount}
            </p>
          </span>
        </Form.Group>
      </Form>
    </div>
  );
}
