import React from "react";
import { Route } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Member from "../pages/Member";
import CreateMember from "../components/member/CreateMember";
import UpdateMember from "../components/member/UpdateMember";
import DeleteMember from "../components/member/DeleteMember";
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="Member" element={<Member />} />
      <Route path="CreateMember" element={<CreateMember />} />
      <Route path="UpdateMember/:id" element={<UpdateMember />} />
      <Route path="DeleteMember/:id" element={<DeleteMember />} />
    </Route>
  )
);

export default Router;
