import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlog } from "../hooks/useBlog";

const Blogs = () => {
  const { loading, blogs } = useBlog();

  if (loading) {
    return (
      <div>
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  }
  return (
    <div className="w-[100%]">
      <div className="flex justify-center mt-4 ">
        <div className="min-w-[60%]">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorId={blog.author.name}
              title={blog.title}
              content={blog.content}
              published="29/03/2004"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
