import { Hono } from "hono";

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { DATABASE_URL} from "../config";
import blogRoutes from "./routes/blog.routes";
import userRoutes from "./routes/user.routes";

const prisma = new PrismaClient({
  datasourceUrl: DATABASE_URL,
}).$extends(withAccelerate());

const app = new Hono();

app.route("api/v1/auth", userRoutes);
app.route("api/v1/blog", blogRoutes);

app.get("/api", (c) => {
  return c.json({
    msg: "Hello its me from api ",
  });
});

export default app;
