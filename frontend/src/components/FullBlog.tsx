import { Avatar } from "./BlogCard";

const FullBlog = ({
  title,
  content,
  name,
}: {
  title: string | undefined;
  content: string | undefined;
  name: string | undefined;
}) => {
  return (
    <div>
      <div className="grid grid-cols-12 px-20 pt-10 max-w-screen-2xl">
        <div className="grid col-span-8 ">
          <div className="font-bold text-5xl">{title}</div>
          <div className="mt-2 text-slate-400">Posted on August 2024</div>
          <div className="text-sm">{content}</div>
        </div>
        <div className="grid col-span-4 text-lg  justify-center">
          <h3 className="text-start">Author</h3>
          <div className="flex justify-center items-center mt-4 space-x-4">
            <div>
              <Avatar name={name} />
            </div>
            <div>
              <h3 className="font-bold text-xl">{name}</h3>
              <p className="text-sm text-gray-400 mt-2">
                Master of mirth, purveyor of puns, and the funniest person in
                the kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
