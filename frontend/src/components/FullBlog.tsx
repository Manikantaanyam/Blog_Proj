import Appbar from "./Appbar";

const FullBlog = ({
  title,
  content,
  name,
}: {
  title: string;
  content: string;
  name: string;
}) => {
  return (
    <div>
      <Appbar />
      <div className="grid grid-cols-12 px-20 pt-10 max-w-screen-2xl">
        <div className="grid col-span-8 ">
          <div className="font-bold text-5xl">{title}</div>
          <div className="text-lg">{content}</div>
        </div>
        <div className="grid col-span-4 text-lg  justify-center">{name}</div>
      </div>
    </div>
  );
};

export default FullBlog;
