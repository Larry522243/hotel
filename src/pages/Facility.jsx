import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ListFacility from "../components/facility/ListFacility";
import styles from "../css/Facility.module.css";
import Button from "@mui/material/Button";

const Facility = () => {
  const navigate = useNavigate();
  const { container } = styles;
  return (
    <>
      <div className={container}>
        <br />
        <br />
        <Button variant="contained" onClick={() => navigate("/CreateFacility")}>
          新增公共設施
        </Button>
        <ListFacility />
      </div>
      <Footer />
    </>
  );
};

export default Facility;
