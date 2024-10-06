import Appbar from "../components/Appbar";
import FullBlog from "../components/FullBlog";
import Spinner from "../components/Spinner";
import { useBlog1 } from "../hooks/useBlog";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog1({
    id: Number(id),
  });
  if (loading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="flex  justify-center">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <FullBlog
        title={blog?.title}
        name={blog?.author?.name}
        content={blog?.content}
      />
    </div>
  );
};

export default Blog;
