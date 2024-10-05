import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

type Context = {
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
};

const blogRouter = new Hono<Context>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("Authorization");
  if (!header) {
    c.status(403);
    return c.json({ msg: "Token not provided" });
  }

  const token = header.split(" ")[1];

  try {
    const user = await verify(token, c.env.JWT_SECRET);
    c.set("userId", user.id as string);
    await next();
  } catch (e) {
    c.status(403);
    return c.json({ msg: "Not logged in" });
  }
});

blogRouter.post("/", async (c) => {
  const userId = c.get("userId");
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const post = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: Number(userId),
      },
    });

    c.status(200);
    return c.json({ msg: "Blog created", id: post.id });
  } catch (e) {
    c.status(403);
    return c.json({ msg: "Error" });
  }
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const updatedPost = await prisma.blog.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json(updatedPost);
  } catch (e) {
    return c.json({ msg: e });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blogs = await prisma.blog.findMany();
    return c.json(blogs);
  } catch (e) {
    return c.json({ msg: e });
  }
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog1 = await prisma.blog.findFirst({
    where: {
      id: Number(id),
    },
  });
  return c.json({ blog1 });
});

export { blogRouter };
