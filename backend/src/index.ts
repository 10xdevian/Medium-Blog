import { Hono } from "hono";
// import { PrismaClient } from "@prisma/client";
// import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { DATABASE_URL, JWT_SECRET } from "../config";

const prisma = new PrismaClient({
  datasourceUrl: DATABASE_URL,
}).$extends(withAccelerate());

const app = new Hono();

app.post("/signup", async (c) => {
  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  const token = await sign({ id: user.id }, JWT_SECRET);

  return c.json({ token });
});

app.get("/api", (c) => {
  return c.json({
    msg: "Hello its me from api ",
  });
});

export default app;
