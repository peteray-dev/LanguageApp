import React from "react";
import { Dropdown } from "react-bootstrap";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Nav() {
  return (
    <div>
      <Dropdown className="cool">
        <a className="linkref english" href="">
          English
        </a>
        &nbsp;
        <a className="linkref yoruba" href="">
          Yoruba
        </a>
        &nbsp;
        <a className="linkref igbo" href="">
          Igbo
        </a>
        &nbsp;
        <Dropdown.Toggle
          className="cooler"
          id="dropdown-basic"
        ></Dropdown.Toggle>
        <Dropdown.Menu className="tog">
          <Dropdown.Item className="coole" href="#/action-1">
            Yoruba
          </Dropdown.Item>
          <Dropdown.Item className="coole" href="#/action-2">
            Igbo
          </Dropdown.Item>
          <Dropdown.Item className="coole" href="#/action-3">
            Efik
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
