import React, { useState } from "react";
import styles from "../../css/Comment.module.css";
import { instance } from "../../API/instance";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const CreateComment = () => {
  const navigate = useNavigate();
  const { container } = styles;
  const [partId, setPartId] = useState("");
  const [birth, setBirth] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [stars, setStars] = useState("");
  const [content, setContent] = useState("");
  const findMember = () => {
    const geturl = `/member/${partId}&${birth}`;
    (async () => {
      try {
        const {
          data: { member },
        } = await instance.get(geturl);
        console.log(member);
        alert("Member finded!");
        setId(member.mId);
        setName(`${member.firstName}${member.lastName}`);
      } catch (error) {
        alert("Member not found!");
        console.log(error);
      }
    })();
  };
  const newCommentHandler = (e) => {
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
        mId: id,
        createDate: date,
        star: stars,
        content: "" || content,
      };
      console.log(comment);
      try {
        const posturl = "/comment/";
        const postResponse = await instance.post(
          posturl,
          JSON.stringify(comment)
        );
        console.log(postResponse);
        alert("Comment Created!");
        setPartId("");
        setBirth("");
        setId("");
        setName("");
        setStars("");
        setContent("");
        navigate("/Comment/");
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
        <h1>新增評論</h1>
        <form onSubmit={newCommentHandler}>
          <Table striped bordered size="sm">
            <tbody>
              <tr>
                <td>身分證後四碼</td>
                <td>
                  <input
                    type="text"
                    value={partId}
                    onChange={(e) => {
                      setPartId(e.target.value);
                    }}
                  />
                </td>
                <td>生日</td>
                <td>
                  <input
                    type="date"
                    value={birth}
                    onChange={(e) => {
                      setBirth(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={findMember}
                  >
                    找尋會員
                  </Button>
                </td>
              </tr>
              <tr>
                <td>會員編號</td>
                <td colSpan={3}>
                  <input type="text" readOnly value={id} />
                </td>
              </tr>
              <tr>
                <td>姓名</td>
                <td colSpan={3}>
                  <input type="text" readOnly value={name} />
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

export default CreateComment;
