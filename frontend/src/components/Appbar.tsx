import { Avatar } from "./BlogCard";

const Appbar = () => {
  return (
    <div className="flex justify-between px-20  py-4 border-b shadow-sm">
      <div>Medium</div>
      <div>
        <Avatar name="Manikanta" />
      </div>
    </div>
  );
};

export default Appbar;
