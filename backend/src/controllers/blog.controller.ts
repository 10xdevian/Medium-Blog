import { Context } from "hono";

export const createBlog = async (c: Context) => {
  return c.json({ message: "User created successfully" });
};

export const updateBlog = async (c:Context)=> {
    return c.json({
        msg:"User Signin"
    })
}

export const getBlog = async (c:Context)=> {
    return c.json({
        msg:"User Signin"
    })
}

export const deleteBlog = async (c:Context)=> {
    return c.json({
        msg:"User Signin"
    })
}