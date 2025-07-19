import { Hono } from "hono";
import { createBlog, deleteBlog, getBlog, updateBlog } from "../controllers";

const blogRoutes = new Hono();

blogRoutes.post("/blog", createBlog);
blogRoutes.put("/blog", updateBlog);
blogRoutes.get("blog", getBlog);
blogRoutes.delete("/blog/:id", deleteBlog);

export default blogRoutes;
