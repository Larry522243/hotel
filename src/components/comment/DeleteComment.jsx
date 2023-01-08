import React, { useState, useEffect } from "react";
import styles from "../../css/Comment.module.css";
import { instance } from "../../API/instance";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";

const DeleteComment = () => {
    const param = useParams();
    const url = `/comment/${param.id}`;
    const navigate = useNavigate();
    const { container } = styles;
    const [id, setId] = useState("");
    const [stars, setStars] = useState("");
    const [content, setContent] = useState("");
    const deleteCommentHandler = (e) => {
        e.preventDefault();
        (async () => {
            try {
                const url = "/comment/";
                const postResponse = await instance.delete(url + param.id,);
                console.log(postResponse);
                alert("Comment Deleted!");
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
            const { data: { comment } } = await instance.get(url);
            console.log(comment);
            setId(comment.mId);
            setStars(comment.star);
            setContent(comment.content);
        })();
        // eslint-disable-next-line
    }, []);
    return (
        <div className={container}>
            <br />
            <br />
            <h1>刪除評論</h1>
            <form onSubmit={deleteCommentHandler}>
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
                                    readOnly
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
                                    readOnly
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
    );
};

export default DeleteComment;