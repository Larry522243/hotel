import React, { useState, useEffect } from "react";
import styles from "../../css/Comment.module.css";
import { instance } from "../../API/instance";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer";

const UpdateComment = () => {
  const param = useParams();
  const url = `/comment/${param.id}`;
  const navigate = useNavigate();
  const { container } = styles;
  const [id, setId] = useState("");
  const [stars, setStars] = useState("");
  const [content, setContent] = useState("");
  const updateCommentHandler = (e) => {
    e.preventDefault();
    const dateNow = new Date();
    const date = `${String(dateNow.getFullYear()).padStart(2, "0")}-${String(
      dateNow.getMonth() + 1
    ).padStart(2, "0")}-${String(dateNow.getDate()).padStart(2, "0")}T${String(
      dateNow.getHours()
    ).padStart(2, "0")}:${String(dateNow.getMinutes()).padStart(
      2,
      "0"
    )}:${String(dateNow.getSeconds()).padStart(2, "0")}`;
    (async () => {
      const comment = {
        createDate: date,
        star: stars,
        content: "" || content,
      };
      console.log(comment);
      try {
        const url = "/comment/";
        const postResponse = await instance.patch(url + param.id, comment);
        console.log(postResponse);
        alert("Comment Updated!");
        setId("");
        setStars("");
        setContent("");
        navigate("/Comment/");
      } catch (error) {
        console.log(error);
      }
    })();
  };
  useEffect(() => {
    (async () => {
      const {
        data: { comment },
      } = await instance.get(url);
      console.log(comment);
      setId(comment.mId);
      setStars(comment.star);
      setContent(comment.content);
    })();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className={container}>
        <br />
        <br />
        <h1>修改評論</h1>
        <form onSubmit={updateCommentHandler}>
          <Table striped bordered size="sm">
            <tbody>
              <tr>
                <td>會員編號</td>
                <td colSpan={3}>
                  <input type="text" readOnly value={id} />
                </td>
              </tr>
              <tr>
                <td>幾顆星</td>
                <td colSpan={3}>
                  <input
                    type="text"
                    placeholder="請輸入0~5"
                    value={stars}
                    onChange={(e) => {
                      setStars(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>內容</td>
                <td colSpan={3}>
                  <textarea
                    cols={55}
                    rows={10}
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
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
          <Button variant="contained" color="error" href="/Comment/">
            取消
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateComment;
