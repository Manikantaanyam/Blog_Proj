import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const Appbar = () => {
  return (
    <div className="flex justify-between px-20  py-4 border-b shadow-sm">
      <Link
        to="/blogs"
        className="flex justify-center flex-col text-xl font-bold"
      >
        Medium
      </Link>
      <div>
        <Link to={"/publish"}>
          {" "}
          <button
            type="button"
            className="mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            create blog
          </button>
        </Link>
        <Avatar name="Manikanta" />
      </div>
    </div>
  );
};

export default Appbar;
