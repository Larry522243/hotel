import React, { useState } from "react";
import styles from "../../css/Facility.module.css";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";
import Footer from "../Footer";
import { instance } from "../../API/instance";
import { useNavigate } from "react-router-dom";

const CreateFacility = () => {
  const navigate = useNavigate();
  const { container } = styles;
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [floor, setFloor] = useState("");
  const [people, setPeople] = useState("");
  const newFacilityHandler = (e) => {
    e.preventDefault();
    (async () => {
      const facility = {
        fName: "" || name,
        fTime: "" || time,
        fFloor: "" || floor,
        fPeople: "" || people,
      };
      try {
        const url = "/facility/";
        const response = await instance.post(url, JSON.stringify(facility));
        console.log(response);
        alert("Facility created!");
        setName("");
        setTime("");
        setFloor("");
        setPeople("");
        navigate("/facility/");
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    <>
      <div className={container}>
        <br />
        <br />
        <h1>新增公共設施</h1>
        <form onSubmit={newFacilityHandler}>
          <Table striped bordered size="sm">
            <tbody>
              <tr>
                <td>名稱</td>
                <td>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>開放時間</td>
                <td>
                  <input
                    type="text"
                    placeholder="例如：08:00~21:00"
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>位於樓層</td>
                <td>
                  <input
                    type="text"
                    placeholder="例如：5"
                    value={floor}
                    onChange={(e) => {
                      setFloor(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>可容納人數</td>
                <td>
                  <input
                    type="text"
                    value={people}
                    onChange={(e) => {
                      setPeople(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <Button variant="contained" color="success" type="submit">
            送出
          </Button>
          &nbsp;
          <Button variant="contained" color="error" href="/Facility/">
            取消
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateFacility;
