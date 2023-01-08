import React, { useState, useEffect } from "react";
import { instance } from "../../API/instance";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";

const ListFacility = () => {
  const [facilities, setFacilities] = useState([]);
  const getFacility = () => {
    (async () => {
      const url = "/facility/";
      const { data } = await instance.get(url);
      console.log(data);
      setFacilities(data.facilities);
    })();
  };
  useEffect(() => {
    getFacility();
  }, []);
  return (
    <>
      <h1>公共設施介紹</h1>
      {facilities &&
        facilities.map((facility) => {
          return (
            <Col key={facility.fId}>
              <Card style={{ width: "100%", marginBottom: "1rem" }}>
                <Card.Body>
                  <Card.Title>{facility.fName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {`開放時間：${facility.fTime}`}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    {`樓層：${facility.fFloor}`}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    {`可容納人數：${facility.fPeople}`}
                  </Card.Subtitle>
                  <Card.Text>
                    <Button
                      variant="contained"
                      color="success"
                      href={`../UpdateFacility/${facility.fId}`}
                    >
                      修改
                    </Button>
                    &nbsp;
                    <Button
                      variant="contained"
                      color="error"
                      href={`../DeleteFacility/${facility.fId}`}
                    >
                      刪除
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </>
  );
};

export default ListFacility;
