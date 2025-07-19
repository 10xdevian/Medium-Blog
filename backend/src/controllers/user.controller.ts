import { Context } from "hono";
import prisma from "../db";
import { sign } from "hono/jwt";
import { JWT_SECRET } from "../../config";

export const signin = async (c: Context) => {
  return c.json({ message: "User created successfully" });
};

export const signup = async (c: Context) => {
  const body = await c.req.json();
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  const token = await sign({ id: user.id }, JWT_SECRET);
  return c.json({ token });
};

export const me = async (c: Context) => {
  return c.json({
    msg: "User Signin",
  });
};
