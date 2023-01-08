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
import Comment from "../pages/Comment";
import CreateComment from "../components/comment/CreateComment";
import UpdateComment from "../components/comment/UpdateComment";
import DeleteComment from "../components/comment/DeleteComment";
import Facility from "../pages/Facility";
import CreateFacility from "../components/facility/CreateFacility";
import UpdateFacility from "../components/facility/UpdateFacility";
import DeleteFacility from "../components/facility/DeleteFacility";
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="Member" element={<Member />} />
      <Route path="CreateMember" element={<CreateMember />} />
      <Route path="UpdateMember/:id" element={<UpdateMember />} />
      <Route path="DeleteMember/:id" element={<DeleteMember />} />
      <Route path="Comment" element={<Comment />} />
      <Route path="CreateComment" element={<CreateComment />} />
      <Route path="UpdateComment/:id" element={<UpdateComment />} />
      <Route path="DeleteComment/:id" element={<DeleteComment />} />
      <Route path="Facility" element={<Facility />} />
      <Route path="CreateFacility" element={<CreateFacility />} />
      <Route path="UpdateFacility/:id" element={<UpdateFacility />} />
      <Route path="DeleteFacility/:id" element={<DeleteFacility />} />
    </Route>
  )
);

export default Router;
