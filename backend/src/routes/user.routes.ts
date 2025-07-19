import { Hono } from "hono";
import { me, signin, signup } from "../controllers";

const userRoutes = new Hono();

userRoutes.post("/signup", signup);
userRoutes.post("/signin", signin);
userRoutes.get("/me", me);


export default userRoutes;
