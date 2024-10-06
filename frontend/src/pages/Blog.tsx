import FullBlog from "../components/FullBlog";
import { useBlog1 } from "../hooks/useBlog";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog1({
    id: Number(id),
  });
  if (loading) {
    return <div>loading..</div>;
  }

  return (
    <div>
      <FullBlog
        title={blog.title}
        name={blog.author.name}
        content={blog.content}
      />
    </div>
  );
};

export default Blog;
