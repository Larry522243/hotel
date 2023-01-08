import React, { useState, useEffect } from "react";
import { instance } from "../../API/instance";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";

const ListMember = () => {
  const url = "/Member";
  const [members, setMembers] = useState([]);
  const getMembers = () => {
    (async () => {
      try {
        const { data } = await instance.get(url);
        console.log(data.members);
        setMembers(data.members);
      } catch (error) {
        console.log(error);
      }
    })();
  };
  useEffect(() => {
    getMembers();
  }, []);
  return (
    <>
      <h1>會員資料表</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <td>編號</td>
            <td>姓名</td>
            <td>性別</td>
            <td>身分證字號</td>
            <td>生日</td>
            <td>帳號</td>
            <td>密碼</td>
            <td>居住地</td>
            <td>電話</td>
            <td>動作</td>
          </tr>
        </thead>
        <tbody>
          {members &&
            members.map((member, index) => {
              return (
                <tr key={member.mId}>
                  <td>{index}</td>
                  <td>{`${member.firstName} ${member.lastName}`}</td>
                  <td>{member.gender}</td>
                  <td>{member.idNum}</td>
                  <td>{String(member.birth).substring(0, 10)}</td>
                  <td>{member.email}</td>
                  <td>{member.password}</td>
                  <td>{`${member.country} ${member.city}`}</td>
                  <td>{member.phone}</td>
                  <td>
                    <Button
                      variant="contained"
                      color="success"
                      href={`../UpdateMember/${member.mId}`}
                    >
                      修改
                    </Button>
                    &nbsp;
                    <Button
                      variant="contained"
                      color="error"
                      href={`../DeleteMember/${member.mId}`}
                    >
                      刪除
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default ListMember;
