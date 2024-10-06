import { Link } from "react-router-dom";

interface BlogCardProp {
  id: number;
  authorId: string;
  title: string;
  content: string;
  published: string;
}

const BlogCard = ({
  id,
  authorId,
  title,
  content,
  published,
}: BlogCardProp) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b pb-4 p-4 ">
        <div className="flex ">
          <Avatar name={authorId} />
          <div className="flex justify-center flex-col font-thin pl-4">
            {authorId}.
          </div>
          <div className="flex justify-center flex-col font-extralight pl-4">
            {published}
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold pt-2"> {title}</div>
          <div className="font-thin text-md">{content.slice(0, 100)}...</div>
        </div>
        <div className="text-slate-500 text-sm pt-2">
          {Math.ceil(content.length / 100)} min read
        </div>
      </div>
    </Link>
  );
};

export const Avatar = ({ name }: { name: string | undefined }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name ? name[0] : "A"}
      </span>
    </div>
  );
};

export default BlogCard;
