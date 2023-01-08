import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import styles from "../../css/Member.module.css";
import Button from "@mui/material/Button";
import { instance } from "../../API/instance";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMember = () => {
  const navigate = useNavigate();
  const url = "/member/";
  const param = useParams();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [idNum, setIdNum] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const getUrl = url + param.id;
  const { container } = styles;
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { member },
        } = await instance.get(getUrl);
        console.log(member);
        setEmail(member.email);
        setpassword(member.password);
        setFirstName(member.firstName);
        setLastName(member.lastName);
        setGender(member.gender);
        setBirth(member.birth);
        setIdNum(member.idNum);
        setPhone(member.phone);
        setCountry(member.country);
        setCity(member.city);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const updateMemberHandler = (e) => {
    e.preventDefault();
    const member = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      birth: birth,
      phone: phone,
      email: email,
      password: password,
      idNum: idNum,
      country: country,
      city: city,
    };
    console.log(member);
    (async () => {
      try {
        const { data } = await instance.patch(url + param.id, member);
        console.log(data);
        alert(`Member ${param.id} has been updated!`);
        navigate("/Member/");
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    <div className={container}>
      <br />
      <br />
      <h1>修改會員資料</h1>
      <form onSubmit={updateMemberHandler}>
        <Table striped bordered size="sm">
          <tbody>
            <tr>
              <td>帳號</td>
              <td colSpan={3}>
                <input
                  type="text"
                  placeholder="請輸入電子信箱"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>密碼</td>
              <td colSpan={3}>
                <input
                  type="text"
                  placeholder="請輸入密碼"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>姓氏</td>
              <td>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </td>
              <td>名字</td>
              <td>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>性別</td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  value="M"
                  id="M"
                  checked={gender === "M"}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <label htmlFor="M">男</label>&nbsp;&nbsp;
                <input
                  type="radio"
                  name="gender"
                  value="F"
                  id="F"
                  checked={gender === "F"}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <label htmlFor="F">女</label>
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
              <td>身分證字號</td>
              <td>
                <input
                  type="text"
                  value={idNum}
                  onChange={(e) => {
                    setIdNum(e.target.value);
                  }}
                />
              </td>
              <td>電話</td>
              <td>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>國家</td>
              <td>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />
              </td>
              <td>城市</td>
              <td>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
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
        <Button variant="contained" color="error" href="/Member/">
          取消
        </Button>
      </form>
    </div>
  );
};

export default UpdateMember;
