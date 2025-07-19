import { Context } from "hono";

export const signup = async (c: Context) => {
  return c.json({ message: "User created successfully" });
};

export const signin = async (c: Context) => {
  return c.json({
    msg: "User Signin",
  });
};

export const me = async (c: Context) => {
  return c.json({
    msg: "User Signin",
  });
};
