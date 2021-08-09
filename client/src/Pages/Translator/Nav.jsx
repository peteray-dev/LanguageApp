import React from "react";
import { Dropdown } from "react-bootstrap";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Nav() {
  return (
    <div>
      <Dropdown className="cool">
        <div className="col justify-content-between d-flex ">
          <div className="mt-4 language">
            <a className="ms-3 linkref english" href="">
              English
            </a>
            <a className="ms-3 linkref yoruba" href="">
              Yoruba
            </a>
            <a className="ms-3 me-2 linkref igbo" href="">
              Igbo
            </a>
          </div>

          <div className="dropdown my-1 me-2">
            <Dropdown.Toggle
              className="cooler "
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
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
