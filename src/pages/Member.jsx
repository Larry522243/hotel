import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ListMember from "../components/member/ListMember";
import styles from "../css/Member.module.css";
import Button from "@mui/material/Button";

const Member = () => {
  const navigate = useNavigate();
  const { container } = styles;
  return (
    <>
      <div className={container}>
        <br />
        <br />
        <Button variant="contained" onClick={() => navigate("/CreateMember")}>
          新增會員
        </Button>
        <ListMember />
      </div>
      <Footer />
    </>
  );
};

export default Member;
