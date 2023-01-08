import React from "react";
import ListComment from "../components/comment/ListComment";
import Footer from "../components/Footer";
import styles from "../css/Comment.module.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Comment = () => {
  const navigate = useNavigate();
  const { container } = styles;
  return (
    <>
      <div className={container}>
        <br />
        <br />
        <Button variant="contained" onClick={() => navigate("/CreateComment")}>
          新增評論
        </Button>
        <ListComment />
      </div>
      <Footer />
    </>
  );
};

export default Comment;
