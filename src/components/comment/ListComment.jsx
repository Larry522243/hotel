import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { instance } from "../../API/instance";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Button from "@mui/material/Button";

const ListComment = () => {
  const url = "/comment/multiple";
  const [comments, setComments] = useState([]);
  const getComment = () => {
    (async () => {
      try {
        const { data } = await instance.get(url);
        console.log(data);
        setComments(data.comment);
      } catch (error) {
        console.log(error);
      }
    })();
  };
  useEffect(() => {
    getComment();
  }, []);
  return (
    <>
      <h1>顧客評論區</h1>
      {comments &&
        comments.map((comment) => {
          const star = [];
          const noneStar = 5 - comment.star;
          for (let i = 0; i < comment.star; i++) {
            star.push(<StarIcon color="primary" />);
          }
          for (let i = 0; i < noneStar; i++) {
            star.push(<StarBorderIcon color="primary" />);
          }
          return (
            <Col key={comment.cId}>
              <Card style={{ width: "100%", marginBottom: "1rem" }}>
                <Card.Body>
                  <Card.Title>{`${comment.members[0].firstName}${comment.members[0].lastName}`}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {String(comment.createDate).replace("T", "  ")}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    {star}
                  </Card.Subtitle>
                  <Card.Text>{comment.content}</Card.Text>
                  <Card.Text>
                    <Button
                      variant="contained"
                      color="success"
                      href={`../UpdateComment/${comment.cId}`}
                    >
                      修改
                    </Button>
                    &nbsp;
                    <Button
                      variant="contained"
                      color="error"
                      href={`../DeleteComment/${comment.cId}`}
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

export default ListComment;
