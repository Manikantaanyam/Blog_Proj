import { ChangeEvent, useState } from "react";
import { CreateBlogInput } from "@anyam/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
const Publish = () => {
  const navigate = useNavigate();
  const [blogInputs, setBlogInputs] = useState<CreateBlogInput>({
    title: "",
    content: "",
  });

  console.log(blogInputs);

  const handleBlogData = async () => {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/blog`,
      blogInputs,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    if (response.data.id) {
      navigate(`/blog/${response.data.id}`);
    }

    console.log(response.data);
  };
  return (
    <div>
      <div className="max-w-screen-lg flex justify-center m-auto mt-4">
        <div className="w-full ">
          {" "}
          <input
            onChange={(e) => {
              setBlogInputs({
                ...blogInputs,
                title: e.target.value,
              });
            }}
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
            required
          />
          <TextArea
            onChange={(e) => {
              setBlogInputs({
                ...blogInputs,
                content: e.target.value,
              });
            }}
          />
          <button
            onClick={handleBlogData}
            type="button"
            className="w-full mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
};

const TextArea = ({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="h-[50vh]">
      <textarea
        onChange={onChange}
        id="message"
        rows={4}
        className="mt-2 block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
};

export default Publish;
