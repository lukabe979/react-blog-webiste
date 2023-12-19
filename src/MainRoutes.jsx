import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/addblog/:id" element={<AddBlog />} />
    </Routes>
  );
};

export default MainRoutes;
