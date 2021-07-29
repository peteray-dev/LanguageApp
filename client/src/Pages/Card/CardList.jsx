import React from "react";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Language from "../../Pages/Card/Language";
import "../Learn/Learn.css"

function CardList({ id, langName, history }) {
    console.log({ history });
  console.log(langName );
  console.log(id );
  return (
    <>
      <Card className="p-2 w-75 card" style={{ backgroundColor: "84e3ce" }}>
        <h1
          className="heading card-header text-center text-uppercase justify-content-center align-items-center "
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            height: "150px",
            paddingTop: "20%"
          }}
        >
          {langName}
        </h1>
        <Button
          className="text-uppercase"
          style={{
            backgroundColor: "#218c74",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={() => history.push(`/language/${langName}`, { langName: langName })}
        >
          Learn
        </Button>
      </Card>
    </>
  );
}

export default withRouter(CardList);
